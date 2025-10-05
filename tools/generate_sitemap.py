#!/usr/bin/env python3
"""Generate sitemap.xml with priority and change frequency metadata."""
from __future__ import annotations

import sys
from collections import defaultdict
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, Iterable, Tuple
import xml.etree.ElementTree as ET

BASE_URL = "https://uotinitiative.org"
ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PATH = ROOT / "sitemap.xml"
SUPPORTED_LANG_PREFIXES = {
    "ar": "ar",
    "es": "es",
    "pl": "pl",
    "zh": "zh",
}
DEFAULT_LANG_CODE = "en"
EXCLUDED_FILES = {"404.html"}
EXCLUDED_DIRS = {"_site", "node_modules", "vendor"}


def iter_html_files() -> Iterable[Path]:
    for path in ROOT.rglob("*.html"):
        rel_parts = path.relative_to(ROOT).parts
        if not rel_parts:
            continue
        if rel_parts[0] in EXCLUDED_DIRS:
            continue
        if path.name in EXCLUDED_FILES:
            continue
        yield path


def to_loc(lang_prefix: str, slug: str) -> str:
    if lang_prefix:
        if slug == "index.html":
            return f"{BASE_URL}/{lang_prefix}/"
        return f"{BASE_URL}/{lang_prefix}/{slug}"
    if slug == "index.html":
        return f"{BASE_URL}/"
    return f"{BASE_URL}/{slug}"


def priority_and_changefreq(slug: str, lang_code: str) -> Tuple[str, str]:
    filename = slug.split("/")[-1]
    if filename == "index.html":
        return ("1.0" if lang_code == DEFAULT_LANG_CODE else "0.9", "weekly")
    if filename == "updates.html":
        return "0.7", "weekly"
    if filename in {"about.html", "search.html"}:
        return "0.6", "monthly"
    if filename in {"privacy.html", "terms.html"}:
        return "0.5", "yearly"
    return "0.6", "yearly"


def isoformat(ts: float) -> str:
    dt = datetime.fromtimestamp(ts, tz=timezone.utc)
    return dt.strftime("%Y-%m-%dT%H:%M:%S+00:00")


def build_entries() -> Dict[str, Dict[str, Dict[str, str]]]:
    catalog: Dict[str, Dict[str, Dict[str, str]]] = defaultdict(dict)
    for path in iter_html_files():
        rel_parts = path.relative_to(ROOT).parts
        if rel_parts[0] in SUPPORTED_LANG_PREFIXES and len(rel_parts) > 1:
            lang_prefix = rel_parts[0]
            slug = "/".join(rel_parts[1:])
            lang_code = SUPPORTED_LANG_PREFIXES[lang_prefix]
        else:
            lang_prefix = ""
            slug = "/".join(rel_parts)
            lang_code = DEFAULT_LANG_CODE
        loc = to_loc(lang_prefix, slug)
        lastmod = isoformat(path.stat().st_mtime)
        priority, changefreq = priority_and_changefreq(slug, lang_code)
        catalog[slug][lang_code] = {
            "loc": loc,
            "lastmod": lastmod,
            "priority": priority,
            "changefreq": changefreq,
        }
    return catalog


def indent(elem: ET.Element, level: int = 0) -> None:
    indent_str = "\n" + level * "  "
    if len(elem):
        if not elem.text or not elem.text.strip():
            elem.text = indent_str + "  "
        for child in elem:
            indent(child, level + 1)
            if not child.tail or not child.tail.strip():
                child.tail = indent_str + "  "
        if not elem[-1].tail or not elem[-1].tail.strip():
            elem[-1].tail = indent_str
    elif level and (not elem.tail or not elem.tail.strip()):
        elem.tail = indent_str


def main() -> int:
    catalog = build_entries()
    ET.register_namespace("", "http://www.sitemaps.org/schemas/sitemap/0.9")
    ET.register_namespace("xhtml", "http://www.w3.org/1999/xhtml")

    urlset = ET.Element("{http://www.sitemaps.org/schemas/sitemap/0.9}urlset")

    records = []
    for slug, languages in catalog.items():
        for lang_code, payload in languages.items():
            records.append((payload["loc"], slug, lang_code, payload))
    records.sort(key=lambda item: item[0])

    for loc, slug, lang_code, payload in records:
        languages = catalog[slug]
        url = ET.SubElement(urlset, "url")
        ET.SubElement(url, "loc").text = loc
        ET.SubElement(url, "lastmod").text = payload["lastmod"]
        ET.SubElement(url, "changefreq").text = payload["changefreq"]
        ET.SubElement(url, "priority").text = payload["priority"]

        default_href = languages.get(DEFAULT_LANG_CODE, next(iter(languages.values())))
        for alt_lang, alt_payload in sorted(languages.items()):
            ET.SubElement(
                url,
                "{http://www.w3.org/1999/xhtml}link",
                rel="alternate",
                hreflang=alt_lang,
                href=alt_payload["loc"],
            )
        ET.SubElement(
            url,
            "{http://www.w3.org/1999/xhtml}link",
            rel="alternate",
            hreflang="x-default",
            href=default_href["loc"],
        )

    indent(urlset)
    tree = ET.ElementTree(urlset)
    tree.write(OUTPUT_PATH, encoding="utf-8", xml_declaration=True)
    return 0


if __name__ == "__main__":
    sys.exit(main())
