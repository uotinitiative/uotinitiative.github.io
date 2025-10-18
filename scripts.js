const SiteConfig = (() => {
  const analyticsId = "G-EKZHGCZVQT";
  const detailPageMap = {
    english_10_science: "science-age-10-grade-5",
    english_11_math: "math-age-11-grade-6",
    english_12_math: "math-age-12-grade-7",
    english_13_prealgebra: "prealgebra-age-13-grade-8",
    english_14_algebra_1_elementary_algebra: "algebra-1-age-14-grade-9",
    english_15_algebra_2_intermediate_algebra: "algebra-2-age-15-grade-10",
    english_16_algebra_with_trigonometry:
      "algebra-with-trigonometry-age-16-grade-11",
    english_16_introductory_physics_algebra_based:
      "introductory-physics-algebra-based-age-16-grade-11",
    english_17_college_algebra_non_stem_track:
      "college-algebra-non-stem-age-17-grade-12",
    english_17_introductory_statistics:
      "introductory-statistics-age-17-grade-12",
    english_17_precalculus: "precalculus-age-17-grade-12",
    english_18_anatomy_and_physiology:
      "anatomy-and-physiology-age-18-bachelors-1",
    english_18_anthropology: "anthropology-age-18-bachelors-1",
    english_18_astronomy: "astronomy-age-18-bachelors-1",
    english_18_biology_for_non_science_majors:
      "biology-non-science-majors-age-18-bachelors-1",
    english_18_biology_for_science_majors:
      "biology-science-majors-age-18-bachelors-1",
    english_18_biosystems_engineering:
      "biosystems-engineering-age-18-bachelors-1",
    english_18_business_law_essentials:
      "business-law-essentials-age-18-bachelors-1",
    english_18_calculus_vol_1: "calculus-volume-1-age-18-bachelors-1",
    english_18_calculus_vol_2: "calculus-volume-2-age-18-bachelors-1",
    english_18_calculus_vol_3: "calculus-volume-3-age-18-bachelors-1",
    english_18_chemistry: "chemistry-age-18-bachelors-1",
    english_18_foundations_of_computation:
      "foundations-of-computation-age-18-bachelors-1",
    english_18_introduction_to_business:
      "introduction-to-business-age-18-bachelors-1",
    english_18_introductory_business_statistics:
      "introductory-business-statistics-age-18-bachelors-1",
    english_18_macroeconomics: "macroeconomics-age-18-bachelors-1",
    english_18_mathematics_for_liberal_arts_majors:
      "mathematics-for-liberal-arts-age-18-bachelors-1",
    english_18_microeconomics: "microeconomics-age-18-bachelors-1",
    english_18_nutrition_for_nurses: "nutrition-for-nurses-age-18-bachelors-1",
    english_18_philosophy: "philosophy-age-18-bachelors-1",
    english_18_physics_algebra_based:
      "physics-algebra-based-age-18-bachelors-1",
    english_18_physics_calculus_based_vol_1:
      "physics-calculus-based-volume-1-age-18-bachelors-1",
    english_18_physics_calculus_based_vol_2:
      "physics-calculus-based-volume-2-age-18-bachelors-1",
    english_18_physics_calculus_based_vol_3:
      "physics-calculus-based-volume-3-age-18-bachelors-1",
    english_18_political_science: "political-science-age-18-bachelors-1",
    english_18_principles_of_accounting_vol_1_financial_accounting:
      "principles-of-accounting-vol-1-financial-accounting-age-18-bachelors-1",
    english_18_principles_of_accounting_vol_2_managerial_accounting:
      "principles-of-accounting-vol-2-managerial-accounting-age-18-bachelors-1",
    english_18_principles_of_management:
      "principles-of-management-age-18-bachelors-1",
    english_18_psychology: "psychology-age-18-bachelors-1",
    english_18_python_programming: "python-programming-age-18-bachelors-1",
    english_18_sociology: "sociology-age-18-bachelors-1",
    english_18_statistics: "statistics-age-18-bachelors-1",
    english_18_workplace_software_and_skills:
      "workplace-software-and-skills-age-18-bachelors-1",
    english_18_world_history_volume_1_to_1500:
      "world-history-volume-1-to-1500-age-18-bachelors-1",
    english_18_world_history_volume_2_from_1400:
      "world-history-volume-2-from-1400-age-18-bachelors-1",
    english_18_writing_guide_with_handbook:
      "writing-guide-with-handbook-age-18-bachelors-1",
    english_19_clinical_nursing_skills:
      "clinical-nursing-skills-age-19-bachelors-2",
    english_19_discrete_structures: "discrete-structures-age-19-bachelors-2",
    english_19_entrepreneurship: "entrepreneurship-age-19-bachelors-2",
    english_19_introductory_business_ethics:
      "introductory-business-ethics-age-19-bachelors-2",
    english_19_linear_algebra: "linear-algebra-age-19-bachelors-2",
    english_19_microbiology_for_non_majors:
      "microbiology-for-non-majors-age-19-bachelors-2",
    english_19_organic_chemistry: "organic-chemistry-age-19-bachelors-2",
    english_19_organizational_behavior:
      "organizational-behavior-age-19-bachelors-2",
    english_19_pharmacology_for_nurses:
      "pharmacology-for-nurses-age-19-bachelors-2",
    english_19_principles_of_finance:
      "principles-of-finance-age-19-bachelors-2",
    english_19_principles_of_marketing:
      "principles-of-marketing-age-19-bachelors-2",
    english_20_abstract_algebra: "abstract-algebra-age-20-bachelors-3",
    english_20_differential_equations:
      "differential-equations-age-20-bachelors-3",
    english_20_electromagnetics_volume_1:
      "electromagnetics-volume-1-age-20-bachelors-3",
    english_20_electromagnetics_volume_2:
      "electromagnetics-volume-2-age-20-bachelors-3",
    english_20_introduction_to_intellectual_property:
      "introduction-to-intellectual-property-age-20-bachelors-3",
    english_20_linear_time_invariant_dynamic_systems:
      "linear-time-invariant-dynamic-systems-age-20-bachelors-3",
    english_20_maternal_newborn_nursing:
      "maternal-newborn-nursing-age-20-bachelors-3",
    english_20_population_health_for_nurses:
      "population-health-for-nurses-age-20-bachelors-3",
    english_20_psychiatric_mental_health_nursing:
      "psychiatric-mental-health-nursing-age-20-bachelors-3",
    english_21_complex_analysis: "complex-analysis-age-21-bachelors-4",
    english_21_optics: "optics-age-21-bachelors-4",
    english_21_real_analysis_volume_1:
      "real-analysis-volume-1-age-21-bachelors-4",
    english_21_real_analysis_advanced_calculus_volume_1:
      "real-analysis-volume-1-age-21-bachelors-4",
    english_21_real_analysis_volume_2:
      "real-analysis-volume-2-age-21-bachelors-4",
    english_21_real_analysis_advanced_calculus_volume_2:
      "real-analysis-volume-2-age-21-bachelors-4",
    english_22_coastal_dynamics: "coastal-dynamics-age-22-masters-1",
    english_22_structured_electronics_design:
      "structured-electronics-design-age-22-masters-1",
    english_22_traffic_flow_theory: "traffic-flow-theory-age-22-masters-1",
    english_23_quantum_electrical_circuits:
      "quantum-electrical-circuits-age-23-masters-2",
    english_5_science: "science-age-5-kindergarten",
    english_6_science: "science-age-6-grade-1",
    english_7_science: "science-age-7-grade-2",
    english_8_science: "science-age-8-grade-3",
    english_9_science: "science-age-9-grade-4",
  };
  const languagePrefixToCode = {
    english: "en",
    arabic: "ar",
    spanish: "es",
    chinese: "zh",
    polish: "pl",
  };
  const pageLanguageVariants = {
    about: ["en", "es", "ar", "zh", "pl"],
    "abstract-algebra-age-20-bachelors-3": ["en", "es", "ar", "zh"],
    "biology-science-majors-age-18-bachelors-1": ["en", "ar", "zh"],
    "calculus-volume-1-age-18-bachelors-1": ["en", "es", "ar", "zh"],
    "calculus-volume-2-age-18-bachelors-1": ["en", "es"],
    "calculus-volume-3-age-18-bachelors-1": ["en", "es"],
    "chemistry-age-18-bachelors-1": ["en", "es"],
    index: ["en", "es", "ar", "zh", "pl"],
    "macroeconomics-age-18-bachelors-1": ["en", "ar", "pl"],
    "microeconomics-age-18-bachelors-1": ["en", "pl"],
    "physics-calculus-based-volume-1-age-18-bachelors-1": ["en", "es", "pl"],
    "physics-calculus-based-volume-2-age-18-bachelors-1": ["en", "es", "pl"],
    "physics-calculus-based-volume-3-age-18-bachelors-1": ["en", "es", "pl"],
    "precalculus-age-17-grade-12": ["en", "es"],
    privacy: ["en", "es", "ar", "zh", "pl"],
    "psychology-age-18-bachelors-1": ["en", "pl"],
    search: ["en", "es", "ar", "zh", "pl"],
    "statistics-age-18-bachelors-1": ["en", "es"],
    terms: ["en", "es", "ar", "zh", "pl"],
    updates: ["en", "es", "ar", "zh", "pl"],
  };
  const languageDisplayOrder = ["en", "es", "ar", "zh", "pl"];
  const languageLabelFallback = {
    en: "English",
    es: "Español",
    ar: "العربية",
    zh: "中文",
    pl: "Polski",
  };
  const languageAvailabilityHeading = {
    en: "Also available in",
    es: "También disponible en",
    ar: "متوفر أيضًا بـ",
    zh: "还提供以下语言版本",
    pl: "Dostępne także w",
  };
  const formText = {
    en: {
      selectOption: "Select Option",
      selectLanguage: "Select Language",
      selectAge: "Select Age",
      selectSubject: "Select Subject",
      catalogUnavailable: "Catalog unavailable",
      downloadUnavailable: "Download unavailable",
      downloadFailed: "Sorry, the download failed. Please try again.",
    },
    es: {
      selectOption: "Selecciona una opción",
      selectLanguage: "Selecciona un idioma",
      selectAge: "Selecciona una edad",
      selectSubject: "Selecciona una asignatura",
      catalogUnavailable: "Catálogo no disponible",
      downloadUnavailable: "Descarga no disponible",
      downloadFailed: "Lo sentimos, la descarga falló. Inténtalo de nuevo.",
    },
    ar: {
      selectOption: "اختر خيارًا",
      selectLanguage: "اختر لغة",
      selectAge: "اختر عمرًا",
      selectSubject: "اختر مادة",
      catalogUnavailable: "الفهرس غير متاح",
      downloadUnavailable: "التنزيل غير متاح",
      downloadFailed: "عذرًا، فشل التنزيل. يرجى المحاولة مرة أخرى.",
    },
    zh: {
      selectOption: "选择选项",
      selectLanguage: "选择语言",
      selectAge: "选择年龄",
      selectSubject: "选择学科",
      catalogUnavailable: "目录不可用",
      downloadUnavailable: "无法下载",
      downloadFailed: "抱歉，下载失败。请重试。",
    },
    pl: {
      selectOption: "Wybierz opcję",
      selectLanguage: "Wybierz język",
      selectAge: "Wybierz wiek",
      selectSubject: "Wybierz przedmiot",
      catalogUnavailable: "Katalog niedostępny",
      downloadUnavailable: "Pobieranie niedostępne",
      downloadFailed:
        "Przepraszamy, pobieranie nie powiodło się. Spróbuj ponownie.",
    },
  };
  const downloadApiEndpoint =
    "https://uoti-vercel-api.vercel.app/api/download?file=";
  const catalogUrl = "/data/catalog.json";

  return {
    analyticsId,
    detailPageMap,
    languagePrefixToCode,
    pageLanguageVariants,
    languageDisplayOrder,
    languageLabelFallback,
    languageAvailabilityHeading,
    formText,
    downloadApiEndpoint,
    catalogUrl,
  };
})();

const Analytics = (() => {
  const { analyticsId } = SiteConfig;

  function injectGoogleTag() {
    if (!analyticsId || !document || !document.head) {
      return;
    }
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer.push(arguments);
      };
    window.gtag("js", new Date());
    window.gtag("config", analyticsId);
  }

  function trackFileDownload(payload) {
    if (typeof window.gtag !== "function") {
      return;
    }
    window.gtag("event", "file_download", payload);
  }

  injectGoogleTag();

  return { trackFileDownload };
})();

function onDomReady(callback) {
  if (document.readyState !== "loading") {
    callback();
  } else {
    document.addEventListener("DOMContentLoaded", callback);
  }
}

const LanguageModule = (() => {
  const {
    languageDisplayOrder,
    languageLabelFallback,
    languageAvailabilityHeading,
    formText,
    pageLanguageVariants,
  } = SiteConfig;

  function normalizeLanguageCode(code) {
    if (!code) return "";
    return String(code).toLowerCase().split(/[-_]/)[0];
  }

  const documentLanguage = document.documentElement.lang || "en";
  const currentLanguage = normalizeLanguageCode(documentLanguage) || "en";

  function getFormText(key, lang = currentLanguage) {
    const normalized = normalizeLanguageCode(lang) || "en";
    const defaults = formText.en || {};
    const copy = formText[normalized] || defaults;
    return copy[key] || defaults[key] || "";
  }

  function getLocalizedPath(slug, langCode) {
    if (!slug) return "";
    const normalizedLang = normalizeLanguageCode(langCode) || "en";
    const sanitizedSlug = String(slug).replace(/^\/+/, "");
    if (normalizedLang === "en") {
      return sanitizedSlug === "index" ? "/" : `/${sanitizedSlug}.html`;
    }
    return sanitizedSlug === "index"
      ? `/${normalizedLang}/`
      : `/${normalizedLang}/${sanitizedSlug}.html`;
  }

  function getCurrentPageInfo() {
    const segments = (
      window.location && window.location.pathname
        ? window.location.pathname
        : ""
    )
      .split("/")
      .filter(Boolean);

    const nonEnglish = new Set(
      languageDisplayOrder.filter((language) => language !== "en"),
    );

    let lang = "en";
    let fileName = segments.length
      ? segments[segments.length - 1]
      : "index.html";

    if (!fileName || fileName.endsWith("/")) {
      fileName = "index.html";
    }
    if (!fileName.includes(".")) {
      fileName = `${fileName}.html`;
    }

    if (segments.length) {
      const firstSegment = segments[0];
      const normalized = normalizeLanguageCode(firstSegment);
      if (
        normalized &&
        nonEnglish.has(normalized) &&
        normalizeLanguageCode(firstSegment) === normalized &&
        firstSegment.length === normalized.length
      ) {
        lang = normalized;
        if (segments.length === 1) {
          fileName = "index.html";
        } else {
          fileName = segments[segments.length - 1] || "index.html";
          if (!fileName.includes(".")) {
            fileName = `${fileName}.html`;
          }
        }
      }
    }

    return {
      baseSlug: fileName.replace(/\.html$/i, ""),
      lang,
      fileName,
    };
  }

  function sortLanguages(list) {
    if (!Array.isArray(list)) return [];
    return list
      .map(normalizeLanguageCode)
      .filter(Boolean)
      .sort((left, right) => {
        const leftIndex = languageDisplayOrder.indexOf(left);
        const rightIndex = languageDisplayOrder.indexOf(right);
        const normalizedLeft =
          leftIndex === -1 ? Number.MAX_SAFE_INTEGER : leftIndex;
        const normalizedRight =
          rightIndex === -1 ? Number.MAX_SAFE_INTEGER : rightIndex;
        if (normalizedLeft !== normalizedRight) {
          return normalizedLeft - normalizedRight;
        }
        return left.localeCompare(right);
      });
  }

  function getLanguageLabel(langCode, selectElements) {
    const normalized = normalizeLanguageCode(langCode);
    if (selectElements) {
      for (const select of selectElements) {
        const match = Array.from(select.options || []).find(
          (option) => normalizeLanguageCode(option.dataset.lang) === normalized,
        );
        if (match) {
          return (match.textContent || "").trim();
        }
      }
    }
    return languageLabelFallback[normalized] || langCode;
  }

  function getAvailabilityHeading(pageLanguage) {
    const normalizedPageLanguage = normalizeLanguageCode(pageLanguage);
    return (
      languageAvailabilityHeading[currentLanguage] ||
      languageAvailabilityHeading[normalizedPageLanguage] ||
      languageAvailabilityHeading.en
    );
  }

  function getSupportedVariants(slug) {
    const variants = pageLanguageVariants[slug];
    return Array.isArray(variants) ? variants.map(normalizeLanguageCode) : null;
  }

  return {
    normalizeLanguageCode,
    getFormText,
    getLocalizedPath,
    getCurrentPageInfo,
    sortLanguages,
    getLanguageLabel,
    getAvailabilityHeading,
    getSupportedVariants,
    currentLanguage,
  };
})();

const CatalogStore = (() => {
  const { catalogUrl } = SiteConfig;
  let languages = {};
  let loadPromise = null;
  let ready = false;

  function buildConfigMap(entries) {
    const map = {};
    entries.forEach(({ language, age, subject, pdf }) => {
      if (!language || !age || !subject || !pdf) {
        return;
      }
      if (!map[language]) {
        map[language] = { ages: {} };
      }
      const ageConfig = map[language].ages;
      if (!ageConfig[age]) {
        ageConfig[age] = { subjects: {} };
      }
      ageConfig[age].subjects[subject] = pdf;
    });
    return { languages: map };
  }

  async function load() {
    if (loadPromise) {
      return loadPromise;
    }
    loadPromise = (async () => {
      const response = await fetch(catalogUrl, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Failed to load catalog: ${response.status}`);
      }
      const payload = await response.json();
      const mapped = buildConfigMap(Array.isArray(payload) ? payload : []);
      languages = mapped.languages;
      ready = true;
      return languages;
    })().catch((error) => {
      console.error("Catalog data failed to load", error);
      ready = false;
      loadPromise = null;
      throw error;
    });
    return loadPromise;
  }

  function isReady() {
    return ready;
  }

  function getLanguages() {
    return languages;
  }

  function getLanguageConfig(languageCode) {
    return languages[languageCode] || null;
  }

  return {
    load,
    isReady,
    getLanguages,
    getLanguageConfig,
  };
})();

const DownloadManager = (() => {
  const { downloadApiEndpoint, detailPageMap, languagePrefixToCode } =
    SiteConfig;

  function getDownloadLinkElement() {
    return document.getElementById("download-link");
  }

  function disableDownloadLink(link = getDownloadLinkElement()) {
    if (!link) return;
    link.classList.add("disabled");
    link.classList.remove("download-link-active");
    link.setAttribute("aria-disabled", "true");
    link.setAttribute("tabindex", "-1");
    link.href = "#";
  }

  function enableDownloadLink(url, link = getDownloadLinkElement()) {
    if (!link) return;
    link.classList.remove("disabled");
    link.classList.add("download-link-active");
    link.removeAttribute("aria-disabled");
    link.removeAttribute("tabindex");
    link.href = url;
  }

  async function fetchSignedDownloadUrl(filePath) {
    const response = await fetch(
      `${downloadApiEndpoint}${encodeURIComponent(filePath)}`,
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch signed URL: ${response.status}`);
    }
    const data = await response.json();
    if (!data || !data.url) {
      throw new Error("Response missing URL");
    }
    return data.url;
  }

  async function fetchFileSizeFromUrl(url) {
    try {
      const response = await fetch(url, {
        method: "HEAD",
        mode: "cors",
        credentials: "omit",
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch file size: ${response.status}`);
      }
      const lengthHeader = response.headers.get("content-length");
      if (!lengthHeader) {
        return null;
      }
      const bytes = Number(lengthHeader);
      return Number.isFinite(bytes) && bytes > 0 ? bytes : null;
    } catch (error) {
      console.warn("Unable to determine download size", error);
      return null;
    }
  }

  function formatFileSize(bytes) {
    if (!Number.isFinite(bytes) || bytes <= 0) {
      return null;
    }
    const units = ["B", "KB", "MB", "GB", "TB"];
    const base = 1024;
    const exponent = Math.min(
      Math.floor(Math.log(bytes) / Math.log(base)),
      units.length - 1,
    );
    const value = bytes / Math.pow(base, exponent);
    const decimals =
      exponent === 0 || value >= 10
        ? 0
        : exponent === 1
          ? 0
          : 1;
    return `${value.toFixed(decimals)} ${units[exponent]}`;
  }

  function ensureSizeElement(link) {
    let sizeElement = link.querySelector(".textbook-download__size");
    if (!sizeElement) {
      sizeElement = document.createElement("span");
      sizeElement.className = "textbook-download__size";
      sizeElement.setAttribute("aria-live", "polite");
      link.appendChild(sizeElement);
    }
    return sizeElement;
  }

  async function updateDownloadSize(link, signedUrl) {
    if (!link || !signedUrl) {
      return;
    }
    const state = link.getAttribute("data-download-size-state");
    if (state === "loading" || state === "ready") {
      return;
    }

    link.setAttribute("data-download-size-state", "loading");

    const bytes = await fetchFileSizeFromUrl(signedUrl);
    if (!bytes) {
      link.setAttribute("data-download-size-state", "error");
      return;
    }

    const formatted = formatFileSize(bytes);
    if (!formatted) {
      link.setAttribute("data-download-size-state", "error");
      return;
    }

    const sizeElement = ensureSizeElement(link);
    sizeElement.textContent = ` (${formatted})`;
    sizeElement.setAttribute("data-bytes", String(bytes));
    link.setAttribute("data-download-size-state", "ready");
  }

  function mapPdfToDetailSlug(pdfPath) {
    if (!pdfPath || typeof pdfPath !== "string") {
      return null;
    }
    if (pdfPath.startsWith("http")) {
      return null;
    }
    const segments = pdfPath.split("/");
    if (segments.length < 2) {
      return null;
    }
    const folder = segments[1];
    if (!folder) {
      return null;
    }
    const staticSlug = detailPageMap[folder];
    if (staticSlug) {
      return LanguageModule.getLocalizedPath(staticSlug, "en");
    }

    const parts = folder.split("_");
    if (parts.length < 2) {
      return null;
    }
    const [languagePrefix, ...rest] = parts;
    const fallbackKey = ["english", ...rest].join("_");
    const fallbackSlug = detailPageMap[fallbackKey];
    if (!fallbackSlug) {
      return null;
    }
    const languageCode = languagePrefixToCode[languagePrefix];
    return languageCode
      ? LanguageModule.getLocalizedPath(fallbackSlug, languageCode)
      : null;
  }

  function buildAnalyticsPayload(pdfPath) {
    if (!pdfPath) {
      return null;
    }
    const fileName = pdfPath.split("/").pop() || pdfPath;
    const fileExtension = fileName.includes(".")
      ? fileName.split(".").pop().toLowerCase()
      : "";
    const payload = {
      file_name: fileName,
      file_path: pdfPath,
    };
    if (fileExtension) {
      payload.file_extension = fileExtension;
    }
    const detailSlug = mapPdfToDetailSlug(pdfPath);
    if (detailSlug) {
      payload.textbook_slug = detailSlug;
    }
    return payload;
  }

  function attachDownloadAnalytics(link) {
    if (!link || link.getAttribute("data-download-analytics")) {
      return;
    }
    const originalPdf = link.getAttribute("data-pdf") || "";
    const handleClick = () => {
      const pdfPath = link.getAttribute("data-pdf") || originalPdf;
      const payload = buildAnalyticsPayload(pdfPath);
      if (payload) {
        Analytics.trackFileDownload(payload);
      }
    };
    link.addEventListener("click", handleClick);
    link.setAttribute("data-download-analytics", "bound");
  }

  async function prepareTextbookDownloadLink(link) {
    const state = link.getAttribute("data-download-state");
    if (state === "loading" || state === "ready") {
      return;
    }
    const pdfPath = link.getAttribute("data-pdf") || link.getAttribute("href");
    if (!pdfPath || pdfPath === "#" || pdfPath.startsWith("http")) {
      return;
    }

    link.setAttribute("data-pdf", pdfPath);
    link.setAttribute("data-download-state", "loading");
    link.classList.add("textbook-download--loading");
    link.setAttribute("aria-disabled", "true");
    link.setAttribute("tabindex", "-1");

    if (!link.hasAttribute("data-original-content")) {
      link.setAttribute("data-original-content", link.innerHTML);
    }
    if (
      link.hasAttribute("target") &&
      !link.hasAttribute("data-original-target")
    ) {
      link.setAttribute(
        "data-original-target",
        link.getAttribute("target") || "",
      );
    }

    link.href = "#";

    try {
      const signedUrl = await fetchSignedDownloadUrl(pdfPath);
      link.href = signedUrl;
      link.classList.remove("textbook-download--loading");
      link.removeAttribute("aria-disabled");
      link.removeAttribute("tabindex");

      const originalContent = link.getAttribute("data-original-content");
      if (originalContent) {
        link.innerHTML = originalContent;
      }

      const originalTarget = link.getAttribute("data-original-target");
      if (originalTarget) {
        link.setAttribute("target", originalTarget);
      }

      link.setAttribute("data-download-state", "ready");
      attachDownloadAnalytics(link);
      updateDownloadSize(link, signedUrl);
    } catch (error) {
      console.error("Signed download link failed to load", error);
      link.classList.remove("textbook-download--loading");
      link.classList.add("textbook-download--error");
      link.textContent = LanguageModule.getFormText("downloadUnavailable");
      link.setAttribute("data-download-state", "error");
      link.removeAttribute("tabindex");
      link.removeAttribute("aria-disabled");
      link.removeAttribute("target");
      link.href = "#";
    }
  }

  function prepareDetailPageLinks() {
    const links = document.querySelectorAll(".textbook-download");
    if (!links.length) {
      return;
    }
    links.forEach((link) => {
      attachDownloadAnalytics(link);
      prepareTextbookDownloadLink(link);
    });
  }

  return {
    disableDownloadLink,
    enableDownloadLink,
    fetchSignedDownloadUrl,
    mapPdfToDetailSlug,
    attachDownloadAnalytics,
    prepareDetailPageLinks,
  };
})();

const FormController = (() => {
  const SELECT_IDS = {
    language: "language",
    age: "learner-age",
    subject: "subject",
  };

  function getSelect(id) {
    return document.getElementById(id);
  }

  function updateSelectTitle(select) {
    if (!select) return;
    const selected = select.options[select.selectedIndex];
    select.title = selected ? selected.textContent : "";
  }

  function renderPlaceholder(select, labelKey) {
    if (!select) return;
    select.innerHTML = `<option value="">${LanguageModule.getFormText(labelKey)}</option>`;
    select.disabled = true;
    updateSelectTitle(select);
  }

  function populateSelect(select, values, placeholderKey) {
    if (!select) return;
    const placeholder = LanguageModule.getFormText(placeholderKey);
    const keys = values ? Object.keys(values) : [];
    select.innerHTML = `<option value="">${placeholder}</option>`;
    keys.forEach((key) => {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = key;
      select.appendChild(option);
    });
    select.disabled = keys.length === 0;
    updateSelectTitle(select);
  }

  function resetForLanguageChange() {
    renderPlaceholder(getSelect(SELECT_IDS.age), "selectAge");
    renderPlaceholder(getSelect(SELECT_IDS.subject), "selectSubject");
    DownloadManager.disableDownloadLink();
  }

  function resetForAgeChange() {
    renderPlaceholder(getSelect(SELECT_IDS.subject), "selectSubject");
    DownloadManager.disableDownloadLink();
  }

  function handleLanguageChange() {
    const languageSelect = getSelect(SELECT_IDS.language);
    updateSelectTitle(languageSelect);
    if (!CatalogStore.isReady() || !languageSelect || !languageSelect.value) {
      resetForLanguageChange();
      return;
    }
    const languageConfig = CatalogStore.getLanguageConfig(languageSelect.value);
    if (!languageConfig) {
      resetForLanguageChange();
      return;
    }
    populateSelect(getSelect(SELECT_IDS.age), languageConfig.ages, "selectAge");
    resetForAgeChange();
  }

  function handleAgeChange() {
    const languageSelect = getSelect(SELECT_IDS.language);
    const ageSelect = getSelect(SELECT_IDS.age);
    updateSelectTitle(ageSelect);
    if (
      !CatalogStore.isReady() ||
      !languageSelect ||
      !ageSelect ||
      !languageSelect.value ||
      !ageSelect.value
    ) {
      resetForAgeChange();
      return;
    }
    const languageConfig = CatalogStore.getLanguageConfig(languageSelect.value);
    const ageConfig =
      languageConfig && languageConfig.ages
        ? languageConfig.ages[ageSelect.value]
        : null;
    populateSelect(
      getSelect(SELECT_IDS.subject),
      ageConfig ? ageConfig.subjects : {},
      "selectSubject",
    );
    DownloadManager.disableDownloadLink();
  }

  async function handleSubjectChange() {
    const languageSelect = getSelect(SELECT_IDS.language);
    const ageSelect = getSelect(SELECT_IDS.age);
    const subjectSelect = getSelect(SELECT_IDS.subject);
    updateSelectTitle(subjectSelect);

    if (
      !CatalogStore.isReady() ||
      !languageSelect ||
      !ageSelect ||
      !subjectSelect
    ) {
      DownloadManager.disableDownloadLink();
      return;
    }

    const language = languageSelect.value;
    const age = ageSelect.value;
    const subject = subjectSelect.value;

    if (!(language && age && subject)) {
      DownloadManager.disableDownloadLink();
      return;
    }

    const languageConfig = CatalogStore.getLanguageConfig(language);
    const pdfPath =
      languageConfig && languageConfig.ages
        ? languageConfig.ages[age]?.subjects?.[subject]
        : null;

    if (!pdfPath) {
      DownloadManager.disableDownloadLink();
      return;
    }

    DownloadManager.disableDownloadLink();

    const detailSlug = DownloadManager.mapPdfToDetailSlug(pdfPath);
    if (detailSlug) {
      DownloadManager.enableDownloadLink(detailSlug);
      return;
    }

    try {
      const signedUrl = await DownloadManager.fetchSignedDownloadUrl(pdfPath);
      DownloadManager.enableDownloadLink(signedUrl);
    } catch (error) {
      console.error("Failed to fetch signed URL", error);
      DownloadManager.disableDownloadLink();
      alert(LanguageModule.getFormText("downloadFailed"));
    }
  }

  async function init() {
    const languageSelect = getSelect(SELECT_IDS.language);
    const ageSelect = getSelect(SELECT_IDS.age);
    const subjectSelect = getSelect(SELECT_IDS.subject);

    DownloadManager.disableDownloadLink();

    if (!languageSelect || !ageSelect || !subjectSelect) {
      return;
    }

    languageSelect.addEventListener("change", handleLanguageChange);
    ageSelect.addEventListener("change", handleAgeChange);
    subjectSelect.addEventListener("change", handleSubjectChange);

    try {
      await CatalogStore.load();
      populateSelect(
        languageSelect,
        CatalogStore.getLanguages(),
        "selectLanguage",
      );
      renderPlaceholder(ageSelect, "selectAge");
      renderPlaceholder(subjectSelect, "selectSubject");
    } catch (error) {
      languageSelect.innerHTML = `<option value="">${LanguageModule.getFormText("catalogUnavailable")}</option>`;
      languageSelect.disabled = true;
      renderPlaceholder(ageSelect, "selectAge");
      renderPlaceholder(subjectSelect, "selectSubject");
    }
  }

  return { init };
})();

const LanguageSwitcher = (() => {
  function renderAvailabilityNotice(pageInfo, languages, selectElements) {
    if (
      !document.body ||
      !document.body.classList.contains("textbook-detail-page")
    ) {
      return;
    }

    const uniqueLanguages = LanguageModule.sortLanguages(languages).filter(
      (language) => language !== pageInfo.lang,
    );

    if (!uniqueLanguages.length) {
      return;
    }

    const container =
      document.querySelector(".book-container") ||
      document.querySelector("main");
    if (!container || container.querySelector(".language-availability")) {
      return;
    }

    const section = document.createElement("section");
    section.className = "language-availability";

    const heading = document.createElement("h2");
    heading.className = "language-availability__title";
    heading.textContent = LanguageModule.getAvailabilityHeading(pageInfo.lang);
    section.appendChild(heading);

    const list = document.createElement("ul");
    list.className = "language-availability__list";
    uniqueLanguages.forEach((language) => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = LanguageModule.getLocalizedPath(pageInfo.baseSlug, language);
      link.textContent = LanguageModule.getLanguageLabel(
        language,
        selectElements,
      );
      listItem.appendChild(link);
      list.appendChild(listItem);
    });
    section.appendChild(list);

    container.appendChild(section);
  }

  function init() {
    const rawLang = (document.documentElement.lang || "").toLowerCase();
    const normalizedDocumentLang =
      LanguageModule.normalizeLanguageCode(rawLang);
    const selectElements = document.querySelectorAll(
      "[data-language-switcher]",
    );
    if (!selectElements.length) {
      return;
    }

    const pageInfo = LanguageModule.getCurrentPageInfo();
    const supportedVariants = LanguageModule.getSupportedVariants(
      pageInfo.baseSlug,
    );
    const supportedSet = supportedVariants ? new Set(supportedVariants) : null;

    selectElements.forEach((select) => {
      const options = Array.from(select.options || []);
      options.forEach((option) => {
        const optionLang = LanguageModule.normalizeLanguageCode(
          option.dataset.lang,
        );
        const fallbackHref = optionLang
          ? LanguageModule.getLocalizedPath("index", optionLang)
          : "";
        if (!option.hasAttribute("data-default-href")) {
          option.setAttribute(
            "data-default-href",
            option.value || fallbackHref || "",
          );
        }
        if (supportedSet && optionLang && supportedSet.has(optionLang)) {
          option.value = LanguageModule.getLocalizedPath(
            pageInfo.baseSlug,
            optionLang,
          );
        } else if (fallbackHref) {
          option.value = fallbackHref;
        } else {
          const defaultHref = option.getAttribute("data-default-href");
          if (defaultHref) {
            option.value = defaultHref;
          }
        }
      });

      const selectedOption =
        options.find(
          (option) =>
            LanguageModule.normalizeLanguageCode(option.dataset.lang) ===
            pageInfo.lang,
        ) ||
        options.find(
          (option) =>
            LanguageModule.normalizeLanguageCode(option.dataset.lang) ===
            normalizedDocumentLang,
        ) ||
        options.find(
          (option) => (option.dataset.lang || "").toLowerCase() === rawLang,
        );
      if (selectedOption) {
        select.value = selectedOption.value;
      }

      select.addEventListener("change", (event) => {
        const target = event.currentTarget;
        if (!target) return;
        const chosen =
          target.selectedOptions && target.selectedOptions[0]
            ? target.selectedOptions[0].value
            : "";
        if (chosen) {
          window.location.href = chosen;
        }
      });
    });

    if (supportedSet) {
      renderAvailabilityNotice(
        pageInfo,
        Array.from(supportedSet),
        selectElements,
      );
    }
  }

  return { init };
})();

const NavigationMenu = (() => {
  function init() {
    const toggle = document.querySelector(".hamburger-menu");
    const menu = document.querySelector(".nav-menu");
    if (!toggle || !menu) return;

    const closeMenu = () => {
      toggle.classList.remove("active");
      menu.classList.remove("active");
    };

    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      menu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      const menuContains = menu.contains(target);
      const toggleContains = toggle.contains(target);
      if (
        !menuContains &&
        !toggleContains &&
        menu.classList.contains("active")
      ) {
        closeMenu();
      }
    });

    const hasPageScrollbar = () =>
      document.documentElement.scrollHeight >
      document.documentElement.clientHeight;

    window.addEventListener(
      "scroll",
      () => {
        if (menu.classList.contains("active") && hasPageScrollbar()) {
          closeMenu();
        }
      },
      { passive: !0 },
    );

    if (typeof ResizeObserver === "function" && document.body) {
      new ResizeObserver(() => {
        if (menu.classList.contains("active") && !hasPageScrollbar()) {
          menu.classList.add("no-scroll");
        } else {
          menu.classList.remove("no-scroll");
        }
      }).observe(document.body);
    }
  }

  return { init };
})();

const CatalogSearch = (() => {
  const selectedTags = new Set();

  function stripHTML(content) {
    const container = document.createElement("div");
    container.innerHTML = content;
    return container.textContent || container.innerText || "";
  }

  function highlightMatch(content, query) {
    if (!query) return content;
    const container = document.createElement("div");
    container.innerHTML = content;
    const walker = document.createTreeWalker(
      container,
      NodeFilter.SHOW_TEXT,
      null,
      false,
    );
    const regex = new RegExp(`(${query})`, "gi");
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.nodeValue.toLowerCase().includes(query.toLowerCase())) {
        const wrapper = document.createElement("span");
        wrapper.innerHTML = node.nodeValue.replace(regex, "<mark>$1</mark>");
        node.parentNode.replaceChild(wrapper, node);
      }
    }
    return container.innerHTML;
  }

  function filterAndHighlight() {
    const searchInput = document.getElementById("catalog-search");
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const cards = document.querySelectorAll(".catalog-card");
    const emptyState = document.getElementById("no-match");

    let hasMatches = false;

    cards.forEach((card) => {
      if (!card.hasAttribute("data-original")) {
        card.setAttribute("data-original", card.innerHTML);
      }
      const original = card.getAttribute("data-original");
      const plainText = stripHTML(original).toLowerCase();
      const tags = (card.dataset.tags || "").split(",");
      const tagMatch = Array.from(selectedTags).every((tag) =>
        tags.includes(tag.toLowerCase()),
      );
      const matches =
        ((!query && query.length === 0) || plainText.includes(query)) &&
        tagMatch;

      if (matches) {
        card.style.display = "";
        card.innerHTML = highlightMatch(original, query);
        hasMatches = true;
      } else {
        card.style.display = "none";
      }
    });

    if (emptyState) {
      emptyState.style.display = hasMatches ? "none" : "block";
    }
  }

  function initTagFilters() {
    const tags = document.querySelectorAll(".tag");
    if (!tags.length) return;
    tags.forEach((tag) => {
      tag.addEventListener("click", () => {
        const filter = tag.dataset.filter;
        if (!filter) return;
        if (selectedTags.has(filter)) {
          selectedTags.delete(filter);
          tag.classList.remove("active");
        } else {
          selectedTags.add(filter);
          tag.classList.add("active");
        }
        filterAndHighlight();
      });
    });
  }

  function init() {
    initTagFilters();
    const searchInput = document.getElementById("catalog-search");
    if (searchInput) {
      searchInput.addEventListener("input", filterAndHighlight);
    }
  }

  window.filterAndHighlight = filterAndHighlight;

  return { init };
})();

const FaqAccordion = (() => {
  function init() {
    const questions = document.querySelectorAll(".faq-question.collapsible");
    if (!questions.length) return;
    questions.forEach((question) => {
      question.addEventListener("click", () => {
        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        if (!answer) return;
        answer.style.display =
          answer.style.display === "block" ? "none" : "block";
      });
    });
  }

  return { init };
})();

const AnimatedCounters = (() => {
  function init() {
    const counters = document.querySelectorAll(".counter");
    if (!counters.length) return;
    counters.forEach((counter) => {
      const animate = () => {
        const target = Number(counter.getAttribute("data-target"));
        const current = Number(counter.innerText);
        const increment = Math.ceil(target / 200);
        if (current < target) {
          counter.innerText = Math.min(current + increment, target);
          setTimeout(animate, 10);
        } else {
          counter.innerText = target;
        }
      };
      animate();
    });
  }

  return { init };
})();

const BreadcrumbSchema = (() => {
  function inject() {
    const breadcrumb = document.querySelector("nav.breadcrumb");
    if (!breadcrumb) return;
    const nodes = Array.from(
      breadcrumb.querySelectorAll('a, span[aria-current="page"]'),
    );
    if (!nodes.length) return;

    const items = nodes.reduce((acc, node, index) => {
      const name = node.textContent.trim();
      if (!name) return acc;
      const isLink = node.tagName.toLowerCase() === "a";
      const href = isLink ? node.getAttribute("href") : "";
      const itemUrl = isLink
        ? new URL(href, window.location.href).href
        : window.location.href;
      acc.push({
        "@type": "ListItem",
        position: index + 1,
        name,
        item: itemUrl,
      });
      return acc;
    }, []);

    if (!items.length) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  return { inject };
})();

const BackToTop = (() => {
  function init() {
    const button = document.querySelector(".back-to-top");
    if (!button) return;

    const toggleVisibility = () => {
      button.classList.toggle("is-visible", window.scrollY > 200);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: !0 });
    button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  return { init };
})();

const FeatureInitializers = {
  catalog: [
    FormController.init,
    DownloadManager.prepareDetailPageLinks,
    CatalogSearch.init,
  ],
  navigation: [LanguageSwitcher.init, NavigationMenu.init, BackToTop.init],
  content: [FaqAccordion.init, AnimatedCounters.init, BreadcrumbSchema.inject],
};

onDomReady(() => {
  Object.values(FeatureInitializers).forEach((initializers) => {
    initializers.forEach((initializer) => {
      try {
        const result = initializer();
        if (result && typeof result.catch === "function") {
          result.catch((error) => {
            console.error("Feature initializer failed", error);
          });
        }
      } catch (error) {
        console.error("Feature initializer failed", error);
      }
    });
  });
});
