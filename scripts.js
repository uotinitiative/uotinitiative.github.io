// Configuration object
const CONFIG = { languages: {} };
let catalogReady = false;
let catalogLoadPromise = null;

// Map English textbook folders to their corresponding detail page slugs
const DETAIL_PAGE_MAP = {
  'english_10_science': 'science-age-10-grade-5',
  'english_11_math': 'math-age-11-grade-6',
  'english_12_math': 'math-age-12-grade-7',
  'english_13_prealgebra': 'prealgebra-age-13-grade-8',
  'english_14_algebra_1_elementary_algebra': 'algebra-1-age-14-grade-9',
  'english_15_algebra_2_intermediate_algebra': 'algebra-2-age-15-grade-10',
  'english_16_algebra_with_trigonometry': 'algebra-with-trigonometry-age-16-grade-11',
  'english_16_introductory_physics_algebra_based': 'introductory-physics-algebra-based-age-16-grade-11',
  'english_17_college_algebra_non_stem_track': 'college-algebra-non-stem-age-17-grade-12',
  'english_17_introductory_statistics': 'introductory-statistics-age-17-grade-12',
  'english_17_precalculus': 'precalculus-age-17-grade-12',
  'english_18_anatomy_and_physiology': 'anatomy-and-physiology-age-18-bachelors-1',
  'english_18_anthropology': 'anthropology-age-18-bachelors-1',
  'english_18_astronomy': 'astronomy-age-18-bachelors-1',
  'english_18_biology_for_non_science_majors': 'biology-non-science-majors-age-18-bachelors-1',
  'english_18_biology_for_science_majors': 'biology-science-majors-age-18-bachelors-1',
  'english_18_biosystems_engineering': 'biosystems-engineering-age-18-bachelors-1',
  'english_18_business_law_essentials': 'business-law-essentials-age-18-bachelors-1',
  'english_18_calculus_vol_1': 'calculus-volume-1-age-18-bachelors-1',
  'english_18_calculus_vol_2': 'calculus-volume-2-age-18-bachelors-1',
  'english_18_calculus_vol_3': 'calculus-volume-3-age-18-bachelors-1',
  'english_18_chemistry': 'chemistry-age-18-bachelors-1',
  'english_18_foundations_of_computation': 'foundations-of-computation-age-18-bachelors-1',
  'english_18_introduction_to_business': 'introduction-to-business-age-18-bachelors-1',
  'english_18_introductory_business_statistics': 'introductory-business-statistics-age-18-bachelors-1',
  'english_18_macroeconomics': 'macroeconomics-age-18-bachelors-1',
  'english_18_mathematics_for_liberal_arts_majors': 'mathematics-for-liberal-arts-age-18-bachelors-1',
  'english_18_microeconomics': 'microeconomics-age-18-bachelors-1',
  'english_18_nutrition_for_nurses': 'nutrition-for-nurses-age-18-bachelors-1',
  'english_18_philosophy': 'philosophy-age-18-bachelors-1',
  'english_18_physics_algebra_based': 'physics-algebra-based-age-18-bachelors-1',
  'english_18_physics_calculus_based_vol_1': 'physics-calculus-based-volume-1-age-18-bachelors-1',
  'english_18_physics_calculus_based_vol_2': 'physics-calculus-based-volume-2-age-18-bachelors-1',
  'english_18_physics_calculus_based_vol_3': 'physics-calculus-based-volume-3-age-18-bachelors-1',
  'english_18_political_science': 'political-science-age-18-bachelors-1',
  'english_18_principles_of_accounting_vol_1_financial_accounting': 'principles-of-accounting-vol-1-financial-accounting-age-18-bachelors-1',
  'english_18_principles_of_accounting_vol_2_managerial_accounting': 'principles-of-accounting-vol-2-managerial-accounting-age-18-bachelors-1',
  'english_18_principles_of_management': 'principles-of-management-age-18-bachelors-1',
  'english_18_psychology': 'psychology-age-18-bachelors-1',
  'english_18_python_programming': 'python-programming-age-18-bachelors-1',
  'english_18_sociology': 'sociology-age-18-bachelors-1',
  'english_18_statistics': 'statistics-age-18-bachelors-1',
  'english_18_workplace_software_and_skills': 'workplace-software-and-skills-age-18-bachelors-1',
  'english_18_world_history_volume_1_to_1500': 'world-history-volume-1-to-1500-age-18-bachelors-1',
  'english_18_world_history_volume_2_from_1400': 'world-history-volume-2-from-1400-age-18-bachelors-1',
  'english_18_writing_guide_with_handbook': 'writing-guide-with-handbook-age-18-bachelors-1',
  'english_19_clinical_nursing_skills': 'clinical-nursing-skills-age-19-bachelors-2',
  'english_19_discrete_structures': 'discrete-structures-age-19-bachelors-2',
  'english_19_entrepreneurship': 'entrepreneurship-age-19-bachelors-2',
  'english_19_introductory_business_ethics': 'introductory-business-ethics-age-19-bachelors-2',
  'english_19_linear_algebra': 'linear-algebra-age-19-bachelors-2',
  'english_19_microbiology_for_non_majors': 'microbiology-for-non-majors-age-19-bachelors-2',
  'english_19_organic_chemistry': 'organic-chemistry-age-19-bachelors-2',
  'english_19_organizational_behavior': 'organizational-behavior-age-19-bachelors-2',
  'english_19_pharmacology_for_nurses': 'pharmacology-for-nurses-age-19-bachelors-2',
  'english_19_principles_of_finance': 'principles-of-finance-age-19-bachelors-2',
  'english_19_principles_of_marketing': 'principles-of-marketing-age-19-bachelors-2',
  'english_20_abstract_algebra': 'abstract-algebra-age-20-bachelors-3',
  'english_20_differential_equations': 'differential-equations-age-20-bachelors-3',
  'english_20_electromagnetics_volume_1': 'electromagnetics-volume-1-age-20-bachelors-3',
  'english_20_electromagnetics_volume_2': 'electromagnetics-volume-2-age-20-bachelors-3',
  'english_20_introduction_to_intellectual_property': 'introduction-to-intellectual-property-age-20-bachelors-3',
  'english_20_linear_time_invariant_dynamic_systems': 'linear-time-invariant-dynamic-systems-age-20-bachelors-3',
  'english_20_maternal_newborn_nursing': 'maternal-newborn-nursing-age-20-bachelors-3',
  'english_20_population_health_for_nurses': 'population-health-for-nurses-age-20-bachelors-3',
  'english_20_psychiatric_mental_health_nursing': 'psychiatric-mental-health-nursing-age-20-bachelors-3',
  'english_21_complex_analysis': 'complex-analysis-age-21-bachelors-4',
  'english_21_optics': 'optics-age-21-bachelors-4',
  'english_21_real_analysis_volume_1': 'real-analysis-volume-1-age-21-bachelors-4',
  'english_21_real_analysis_advanced_calculus_volume_1': 'real-analysis-volume-1-age-21-bachelors-4',
  'english_21_real_analysis_volume_2': 'real-analysis-volume-2-age-21-bachelors-4',
  'english_21_real_analysis_advanced_calculus_volume_2': 'real-analysis-volume-2-age-21-bachelors-4',
  'english_22_coastal_dynamics': 'coastal-dynamics-age-22-masters-1',
  'english_22_structured_electronics_design': 'structured-electronics-design-age-22-masters-1',
  'english_22_traffic_flow_theory': 'traffic-flow-theory-age-22-masters-1',
  'english_23_quantum_electrical_circuits': 'quantum-electrical-circuits-age-23-masters-2',
  'english_5_science': 'science-age-5-kindergarten',
  'english_6_science': 'science-age-6-grade-1',
  'english_7_science': 'science-age-7-grade-2',
  'english_8_science': 'science-age-8-grade-3',
  'english_9_science': 'science-age-9-grade-4',
};

// Map non-English textbook folder prefixes to the suffix used by the localized detail page
const LANGUAGE_PREFIX_TO_CODE = {
    english: 'en',
    arabic: 'ar',
    spanish: 'es',
    chinese: 'zh',
    polish: 'pl',
};

const PAGE_LANGUAGE_VARIANTS = {
  about: ['en', 'es', 'ar', 'zh', 'pl'],
  'abstract-algebra-age-20-bachelors-3': ['en', 'es', 'ar', 'zh'],
  'biology-science-majors-age-18-bachelors-1': ['en', 'ar', 'zh'],
  'calculus-volume-1-age-18-bachelors-1': ['en', 'es', 'ar', 'zh'],
  'calculus-volume-2-age-18-bachelors-1': ['en', 'es'],
  'calculus-volume-3-age-18-bachelors-1': ['en', 'es'],
  'chemistry-age-18-bachelors-1': ['en', 'es'],
  index: ['en', 'es', 'ar', 'zh', 'pl'],
  'macroeconomics-age-18-bachelors-1': ['en', 'ar', 'pl'],
  'microeconomics-age-18-bachelors-1': ['en', 'pl'],
  'physics-calculus-based-volume-1-age-18-bachelors-1': ['en', 'es', 'pl'],
  'physics-calculus-based-volume-2-age-18-bachelors-1': ['en', 'es', 'pl'],
  'physics-calculus-based-volume-3-age-18-bachelors-1': ['en', 'es', 'pl'],
  'precalculus-age-17-grade-12': ['en', 'es'],
  privacy: ['en', 'es', 'ar', 'zh', 'pl'],
  'psychology-age-18-bachelors-1': ['en', 'pl'],
  search: ['en', 'es', 'ar', 'zh', 'pl'],
  'statistics-age-18-bachelors-1': ['en', 'es'],
  terms: ['en', 'es', 'ar', 'zh', 'pl'],
  updates: ['en', 'es', 'ar', 'zh', 'pl'],
};

const LANGUAGE_DISPLAY_ORDER = ['en', 'es', 'ar', 'zh', 'pl'];

const LANGUAGE_LABEL_FALLBACK = {
  en: 'English',
  es: 'Español',
  ar: 'العربية',
  zh: '中文',
  pl: 'Polski',
};

const FORM_TEXT = {
  en: {
    selectOption: 'Select Option',
    selectLanguage: 'Select Language',
    selectAge: 'Select Age',
    selectSubject: 'Select Subject',
    catalogUnavailable: 'Catalog unavailable',
    downloadUnavailable: 'Download unavailable',
    downloadFailed: 'Sorry, the download failed. Please try again.',
  },
  es: {
    selectOption: 'Selecciona una opción',
    selectLanguage: 'Selecciona un idioma',
    selectAge: 'Selecciona una edad',
    selectSubject: 'Selecciona una asignatura',
    catalogUnavailable: 'Catálogo no disponible',
    downloadUnavailable: 'Descarga no disponible',
    downloadFailed: 'Lo sentimos, la descarga falló. Inténtalo de nuevo.',
  },
  ar: {
    selectOption: 'اختر خيارًا',
    selectLanguage: 'اختر لغة',
    selectAge: 'اختر عمرًا',
    selectSubject: 'اختر مادة',
    catalogUnavailable: 'الفهرس غير متاح',
    downloadUnavailable: 'التنزيل غير متاح',
    downloadFailed: 'عذرًا، فشل التنزيل. يرجى المحاولة مرة أخرى.',
  },
  zh: {
    selectOption: '选择选项',
    selectLanguage: '选择语言',
    selectAge: '选择年龄',
    selectSubject: '选择学科',
    catalogUnavailable: '目录不可用',
    downloadUnavailable: '无法下载',
    downloadFailed: '抱歉，下载失败。请重试。',
  },
  pl: {
    selectOption: 'Wybierz opcję',
    selectLanguage: 'Wybierz język',
    selectAge: 'Wybierz wiek',
    selectSubject: 'Wybierz przedmiot',
    catalogUnavailable: 'Katalog niedostępny',
    downloadUnavailable: 'Pobieranie niedostępne',
    downloadFailed: 'Przepraszamy, pobieranie nie powiodło się. Spróbuj ponownie.',
  },
};

const DOWNLOAD_API_ENDPOINT = 'https://uoti-vercel-api.vercel.app/api/download?file=';

function onDomReady(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
    return;
  }
  callback();
}

function normalizeLanguageCode(value) {
  if (!value) {
    return '';
  }
  const lower = String(value).toLowerCase();
  return lower.split(/[-_]/)[0];
}

const DOCUMENT_LANGUAGE = (document.documentElement.lang || 'en');
const CURRENT_LANGUAGE = normalizeLanguageCode(DOCUMENT_LANGUAGE) || 'en';

function getFormText(key) {
  const languageTexts = FORM_TEXT[CURRENT_LANGUAGE] || FORM_TEXT.en;
  return languageTexts[key] || FORM_TEXT.en[key] || '';
}

function getLocalizedPath(baseSlug, langCode) {
  if (!baseSlug) {
    return '';
  }

  const normalizedLang = normalizeLanguageCode(langCode) || 'en';
  const normalizedSlug = String(baseSlug).replace(/^\/+/, '');

  if (normalizedLang === 'en') {
    if (normalizedSlug === 'index') {
      return '/';
    }
    return `/${normalizedSlug}.html`;
  }

  if (normalizedSlug === 'index') {
    return `/${normalizedLang}/`;
  }

  return `/${normalizedLang}/${normalizedSlug}.html`;
}

function getCurrentPageInfo() {
  const path = window.location && window.location.pathname ? window.location.pathname : '';
  const segments = path.split('/').filter(Boolean);
  const supportedNonEnglish = new Set(LANGUAGE_DISPLAY_ORDER.filter(code => code !== 'en'));

  let lang = 'en';
  let fileNameSegment = segments.length ? segments[segments.length - 1] : 'index.html';

  if (!fileNameSegment || fileNameSegment.endsWith('/')) {
    fileNameSegment = 'index.html';
  }

  if (!fileNameSegment.includes('.')) {
    fileNameSegment = `${fileNameSegment}.html`;
  }

  if (segments.length) {
    const firstSegment = segments[0];
    const maybeLang = normalizeLanguageCode(firstSegment);

    if (maybeLang && supportedNonEnglish.has(maybeLang) && normalizeLanguageCode(firstSegment) === maybeLang && firstSegment.length === maybeLang.length) {
      lang = maybeLang;

      if (segments.length === 1) {
        fileNameSegment = 'index.html';
      } else {
        fileNameSegment = segments[segments.length - 1] || 'index.html';
        if (!fileNameSegment.includes('.')) {
          fileNameSegment = `${fileNameSegment}.html`;
        }
      }
    }
  }

  const baseSlug = fileNameSegment.replace(/\.html$/i, '');

  return {
    baseSlug,
    lang,
    fileName: fileNameSegment,
  };
}

function sortLanguages(languages) {
  if (!Array.isArray(languages)) {
    return [];
  }

  return languages
    .map(normalizeLanguageCode)
    .filter(Boolean)
    .sort((a, b) => {
      const indexA = LANGUAGE_DISPLAY_ORDER.indexOf(a);
      const indexB = LANGUAGE_DISPLAY_ORDER.indexOf(b);
      const rankA = indexA === -1 ? Number.MAX_SAFE_INTEGER : indexA;
      const rankB = indexB === -1 ? Number.MAX_SAFE_INTEGER : indexB;

      if (rankA !== rankB) {
        return rankA - rankB;
      }

      return a.localeCompare(b);
    });
}

function getLanguageLabel(langCode, selectors) {
  const normalized = normalizeLanguageCode(langCode);

  if (selectors) {
    for (const select of selectors) {
      const match = Array.from(select.options || []).find(option => normalizeLanguageCode(option.dataset.lang) === normalized);
      if (match) {
        return (match.textContent || '').trim();
      }
    }
  }

  return LANGUAGE_LABEL_FALLBACK[normalized] || langCode;
}

function initLanguageAvailabilityNotice(pageInfo, languages, selectors) {
  if (!document.body || !document.body.classList.contains('textbook-detail-page')) {
    return;
  }

  const sortedLanguages = sortLanguages(languages).filter(lang => lang !== pageInfo.lang);
  if (!sortedLanguages.length) {
    return;
  }

  const container = document.querySelector('.book-container') || document.querySelector('main');
  if (!container || container.querySelector('.language-availability')) {
    return;
  }

  const section = document.createElement('section');
  section.className = 'language-availability';

  const heading = document.createElement('h2');
  heading.className = 'language-availability__title';
  heading.textContent = 'Also available in';
  section.appendChild(heading);

  const list = document.createElement('ul');
  list.className = 'language-availability__list';

  sortedLanguages.forEach(langCode => {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = getLocalizedPath(pageInfo.baseSlug, langCode);
    link.textContent = getLanguageLabel(langCode, selectors);
    item.appendChild(link);
    list.appendChild(item);
  });

  section.appendChild(list);
  container.appendChild(section);
}

function buildConfigMap(entries) {
    const languages = {};

    entries.forEach(({ language, age, subject, pdf }) => {
        if (!languages[language]) {
            languages[language] = { ages: {} };
        }

        const ageBucket = languages[language].ages;
        if (!ageBucket[age]) {
            ageBucket[age] = { subjects: {} };
        }

        ageBucket[age].subjects[subject] = pdf;
    });

    return { languages };
}

async function loadCatalogConfig() {
    if (catalogLoadPromise) {
        return catalogLoadPromise;
    }

    catalogLoadPromise = (async () => {
        try {
            const response = await fetch('/data/catalog.json', { cache: 'no-store' });
            if (!response.ok) {
                throw new Error(`Failed to load catalog: ${response.status}`);
            }

            const entries = await response.json();
            const normalizedEntries = Array.isArray(entries) ? entries : [];
            const map = buildConfigMap(normalizedEntries);
            CONFIG.languages = map.languages;
            catalogReady = true;
            return CONFIG;
        } catch (error) {
            console.error('Catalog data failed to load', error);
            catalogReady = false;
            catalogLoadPromise = null;
            throw error;
        }
    })();

    return catalogLoadPromise;
}

function getDownloadLinkElement() {
    return document.getElementById("download-link");
}

function disableDownloadLink(link = getDownloadLinkElement()) {
    if (!link) {
        return;
    }
    link.classList.add("disabled");
    link.classList.remove("download-link-active");
    link.setAttribute("aria-disabled", "true");
    link.setAttribute("tabindex", "-1");
    link.href = "#";
}

function enableDownloadLink(url, link = getDownloadLinkElement()) {
    if (!link) {
        return;
    }
    link.classList.remove("disabled");
    link.classList.add("download-link-active");
    link.removeAttribute("aria-disabled");
    link.removeAttribute("tabindex");
    link.href = url;
}

async function fetchSignedDownloadUrl(filePath) {
    const response = await fetch(`${DOWNLOAD_API_ENDPOINT}${encodeURIComponent(filePath)}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch signed URL: ${response.status}`);
    }

    const data = await response.json();
    if (!data || !data.url) {
        throw new Error('Response missing URL');
    }

    return data.url;
}

function getDetailSlugFromPdf(pdfUrl) {
    if (!pdfUrl || typeof pdfUrl !== 'string') {
        return null;
    }

    if (pdfUrl.startsWith('http')) {
        return null;
    }

    const segments = pdfUrl.split('/');
    if (segments.length < 2) {
        return null;
    }

    const folderName = segments[1];
    if (!folderName) {
        return null;
    }

    const directEnglishSlug = DETAIL_PAGE_MAP[folderName];
    if (directEnglishSlug) {
        return getLocalizedPath(directEnglishSlug, 'en');
    }

    const folderParts = folderName.split('_');
    if (folderParts.length < 2) {
        return null;
    }

    const languagePrefix = folderParts[0];
    const engKeyParts = folderParts.slice(1);
    const englishKey = ['english', ...engKeyParts].join('_');
    const englishSlug = DETAIL_PAGE_MAP[englishKey];

    if (!englishSlug) {
        return null;
    }

    const languageCode = LANGUAGE_PREFIX_TO_CODE[languagePrefix];
    if (!languageCode) {
        return null;
    }

    return getLocalizedPath(englishSlug, languageCode);
}

// Prepare signed URLs for textbook detail download links
function prepareTextbookDetailDownloads() {
    const detailLinks = document.querySelectorAll('.textbook-download');
    if (!detailLinks.length) {
        return;
    }

    detailLinks.forEach(link => {
        prepareTextbookDownloadLink(link);
    });
}

async function prepareTextbookDownloadLink(link) {
    const state = link.getAttribute('data-download-state');
    if (state === 'loading' || state === 'ready') {
        return;
    }

    const linkTarget = link.getAttribute('data-pdf') || link.getAttribute('href');
    if (!linkTarget || linkTarget === '#' || linkTarget.startsWith('http')) {
        return;
    }

    link.setAttribute('data-pdf', linkTarget);
    link.setAttribute('data-download-state', 'loading');
    link.classList.add('textbook-download--loading');
    link.setAttribute('aria-disabled', 'true');
    link.setAttribute('tabindex', '-1');

    if (!link.hasAttribute('data-original-content')) {
        link.setAttribute('data-original-content', link.innerHTML);
    }
    if (link.hasAttribute('target') && !link.hasAttribute('data-original-target')) {
        link.setAttribute('data-original-target', link.getAttribute('target'));
    }
    link.href = '#';

    try {
        const url = await fetchSignedDownloadUrl(linkTarget);
        link.href = url;
        link.classList.remove('textbook-download--loading');
        link.removeAttribute('aria-disabled');
        link.removeAttribute('tabindex');
        const originalContent = link.getAttribute('data-original-content');
        if (originalContent) {
            link.innerHTML = originalContent;
        }
        const originalTarget = link.getAttribute('data-original-target');
        if (originalTarget) {
            link.setAttribute('target', originalTarget);
        }
        link.setAttribute('data-download-state', 'ready');
    } catch (error) {
        console.error('Signed download link failed to load', error);
        link.classList.remove('textbook-download--loading');
        link.classList.add('textbook-download--error');
        link.textContent = getFormText('downloadUnavailable');
        link.setAttribute('data-download-state', 'error');
        link.removeAttribute('tabindex');
        link.removeAttribute('aria-disabled');
        link.removeAttribute('target');
        link.href = '#';
    }
}

// Helper function to populate select options
function populateSelect(selectId, options, defaultText = getFormText('selectOption')) {
    const select = document.getElementById(selectId);
    if (!select) {
        return;
    }

    const optionKeys = options ? Object.keys(options) : [];
    select.innerHTML = `<option value="">${defaultText}</option>`;
    optionKeys.forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = key;
        select.appendChild(option);
    });
    select.disabled = optionKeys.length === 0;
    updateSelectTitle(select);
}

// Ensure the full option text is accessible via hover
function updateSelectTitle(select) {
    if (!select) {
        return;
    }
    const selectedOption = select.options[select.selectedIndex];
    select.title = selectedOption ? selectedOption.textContent : "";
}

// Show learner age options based on selected language
function showLearnerAge() {
    const language = document.getElementById("language").value;
    updateSelectTitle(document.getElementById("language"));
    if (!catalogReady || !language || !CONFIG.languages[language]) {
        resetSelections("language");
        return;
    }

    const ages = CONFIG.languages[language].ages;
    populateSelect("learner-age", ages, getFormText('selectAge'));
    resetSelections("learner-age");
}

// Show subject options based on selected learner age
function showSubject() {
    const language = document.getElementById("language").value;
    const age = document.getElementById("learner-age").value;
    updateSelectTitle(document.getElementById("learner-age"));
    if (!catalogReady || !(language && age)) {
        resetSelections("learner-age");
        return;
    }

    const languageConfig = CONFIG.languages[language];
    const ageConfig = languageConfig && languageConfig.ages ? languageConfig.ages[age] : null;
    const subjects = ageConfig ? ageConfig.subjects : {};
    populateSelect("subject", subjects, getFormText('selectSubject'));
    resetSelections("subject");
}

// Show download link based on selected subject
async function showDownload() {
    const language = document.getElementById("language").value;
    const age = document.getElementById("learner-age").value;
    const subject = document.getElementById("subject").value;
    updateSelectTitle(document.getElementById("subject"));

    if (!catalogReady || !(language && age && subject)) {
        disableDownloadLink();
        return;
    }

    const languageConfig = CONFIG.languages[language];
    const ageConfig = languageConfig && languageConfig.ages ? languageConfig.ages[age] : null;
    const pdfUrl = ageConfig && ageConfig.subjects ? ageConfig.subjects[subject] : null;

    if (!pdfUrl) {
        disableDownloadLink();
        return;
    }

    disableDownloadLink();

    const detailSlug = getDetailSlugFromPdf(pdfUrl);
    if (detailSlug) {
        enableDownloadLink(detailSlug);
        return;
    }

    try {
        const signedUrl = await fetchSignedDownloadUrl(pdfUrl);
        enableDownloadLink(signedUrl);
    } catch (err) {
        console.error("Failed to fetch signed URL", err);
        disableDownloadLink();
        alert(getFormText('downloadFailed'));
    }
}

// Reset selections and hide download link
function resetSelections(startFrom) {
    if (startFrom === "language") {
        const learnerAgeSelect = document.getElementById("learner-age");
        if (learnerAgeSelect) {
            learnerAgeSelect.innerHTML = `<option value="">${getFormText('selectAge')}</option>`;
            learnerAgeSelect.disabled = true;
            updateSelectTitle(learnerAgeSelect);
        }
    }
    if (startFrom === "language" || startFrom === "learner-age") {
        const subjectSelect = document.getElementById("subject");
        if (subjectSelect) {
            subjectSelect.innerHTML = `<option value="">${getFormText('selectSubject')}</option>`;
            subjectSelect.disabled = true;
            updateSelectTitle(subjectSelect);
        }
    }

    disableDownloadLink();
}

// Initialize the form
async function initForm() {
    const languageSelect = document.getElementById("language");
    const ageSelect = document.getElementById("learner-age");
    const subjectSelect = document.getElementById("subject");

    disableDownloadLink();

    if (!(languageSelect && ageSelect && subjectSelect)) {
        return;
    }

    languageSelect.addEventListener("change", showLearnerAge);
    ageSelect.addEventListener("change", showSubject);
    subjectSelect.addEventListener("change", showDownload);

    try {
        await loadCatalogConfig();
        populateSelect("language", CONFIG.languages, getFormText('selectLanguage'));
    } catch (error) {
        languageSelect.innerHTML = `<option value="">${getFormText('catalogUnavailable')}</option>`;
        languageSelect.disabled = true;
        resetSelections("language");
    }
}

function initSiteLanguageSelectors() {
    const documentLangFull = (document.documentElement.lang || '').toLowerCase();
    const documentLang = normalizeLanguageCode(documentLangFull);
    const selectors = document.querySelectorAll('[data-language-switcher]');

    if (!selectors.length) {
        return;
    }

    const pageInfo = getCurrentPageInfo();
    const pageLanguages = PAGE_LANGUAGE_VARIANTS[pageInfo.baseSlug];
    const availableLanguages = pageLanguages ? new Set(pageLanguages.map(normalizeLanguageCode)) : null;

    selectors.forEach(select => {
        const options = Array.from(select.options || []);

        options.forEach(option => {
            const optionLang = normalizeLanguageCode(option.dataset.lang);
            const languageHome = optionLang ? getLocalizedPath('index', optionLang) : '';
            if (!option.hasAttribute('data-default-href')) {
                option.setAttribute('data-default-href', option.value || languageHome || '');
            }

            if (availableLanguages && optionLang && availableLanguages.has(optionLang)) {
                option.value = getLocalizedPath(pageInfo.baseSlug, optionLang);
            } else {
                if (languageHome) {
                    option.value = languageHome;
                } else {
                    const fallback = option.getAttribute('data-default-href');
                    if (fallback) {
                        option.value = fallback;
                    }
                }
            }
        });

        const selectedOption = options.find(option => normalizeLanguageCode(option.dataset.lang) === pageInfo.lang)
            || options.find(option => normalizeLanguageCode(option.dataset.lang) === documentLang)
            || options.find(option => (option.dataset.lang || '').toLowerCase() === documentLangFull);

        if (selectedOption) {
            select.value = selectedOption.value;
        }

        select.addEventListener('change', event => {
            const target = event.currentTarget;
            if (!target) {
                return;
            }

            const selectedOptionEl = target.selectedOptions && target.selectedOptions[0];
            const nextLocation = selectedOptionEl ? selectedOptionEl.value : '';

            if (nextLocation) {
                window.location.href = nextLocation;
            }
        });
    });

    if (availableLanguages) {
        initLanguageAvailabilityNotice(pageInfo, Array.from(availableLanguages), selectors);
    }
}

function initNavMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (!(hamburger && navMenu)) {
        return;
    }

    const closeMenu = () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    };

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', event => {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    const isScrollable = () => document.documentElement.scrollHeight > document.documentElement.clientHeight;

    window.addEventListener('scroll', () => {
        if (navMenu.classList.contains('active') && isScrollable()) {
            closeMenu();
        }
    }, { passive: true });

    if (typeof ResizeObserver === 'function' && document.body) {
        const resizeObserver = new ResizeObserver(() => {
            if (navMenu.classList.contains('active') && !isScrollable()) {
                navMenu.classList.add('no-scroll');
            } else {
                navMenu.classList.remove('no-scroll');
            }
        });

        resizeObserver.observe(document.body);
    }
}

// Search

function stripHTML(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

function highlightMatch(html, query) {
  if (!query) return html;
  const div = document.createElement("div");
  div.innerHTML = html;

  const walker = document.createTreeWalker(div, NodeFilter.SHOW_TEXT, null, false);
  const regex = new RegExp(`(${query})`, 'gi');

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.nodeValue.toLowerCase().includes(query.toLowerCase())) {
      const span = document.createElement("span");
      span.innerHTML = node.nodeValue.replace(regex, "<mark>$1</mark>");
      node.parentNode.replaceChild(span, node);
    }
  }
  return div.innerHTML;
}

function filterAndHighlight() {
  const input = document.getElementById('catalog-search').value.toLowerCase().trim();
  const cards = document.querySelectorAll('.catalog-card');
  const noMatch = document.getElementById('no-match');
  let matchFound = false;

  cards.forEach(card => {
    if (!card.hasAttribute('data-original')) {
      card.setAttribute('data-original', card.innerHTML);
    }

    const originalHTML = card.getAttribute('data-original');
    const plainText = stripHTML(originalHTML).toLowerCase();
    const tags = card.dataset.tags.split(',');

    // Match tags (all selected tags must be present)
    const matchesTags = Array.from(selectedTags).every(tag =>
      tags.includes(tag.toLowerCase())
    );

    const matchesSearch = input === '' || plainText.includes(input);

    const shouldShow = matchesSearch && matchesTags;

    if (shouldShow) {
      card.style.display = '';
      card.innerHTML = highlightMatch(originalHTML, input);
    } else {
      card.style.display = 'none';
    }

    matchFound = matchFound || shouldShow;
  });

  noMatch.style.display = matchFound ? 'none' : 'block';
}


const selectedTags = new Set();

function initCatalogTagFilters() {
  const tags = document.querySelectorAll('.tag');
  if (!tags.length) {
    return;
  }

  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      const value = tag.dataset.filter;
      if (!value) {
        return;
      }

      if (selectedTags.has(value)) {
        selectedTags.delete(value);
        tag.classList.remove('active');
      } else {
        selectedTags.add(value);
        tag.classList.add('active');
      }

      filterAndHighlight();
    });
  });
}

// FAQ
function initFaqAccordion() {
  const questions = document.querySelectorAll('.faq-question.collapsible');
  if (!questions.length) {
    return;
  }

  questions.forEach(question => {
    question.addEventListener('click', () => {
      question.classList.toggle('active');
      const answer = question.nextElementSibling;
      if (!answer) {
        return;
      }

      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });
}

// Stats
function initAnimatedCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) {
    return;
  }

  counters.forEach(counter => {
    const update = () => {
      const target = Number(counter.getAttribute('data-target'));
      const current = Number(counter.innerText);
      const increment = Math.ceil(target / 200);

      if (current < target) {
        counter.innerText = Math.min(current + increment, target);
        setTimeout(update, 10);
      } else {
        counter.innerText = target;
      }
    };

    update();
  });
}

// Inject BreadcrumbList structured data
function injectBreadcrumbSchema() {
  const breadcrumbNav = document.querySelector('nav.breadcrumb');
  if (!breadcrumbNav) {
    return;
  }

  const crumbNodes = Array.from(breadcrumbNav.querySelectorAll('a, span[aria-current="page"]'));
  if (!crumbNodes.length) {
    return;
  }

  const itemListElement = crumbNodes.reduce((items, node, index) => {
    const name = node.textContent.trim();
    if (!name) {
      return items;
    }

    const isLink = node.tagName.toLowerCase() === 'a';
    const href = isLink ? node.getAttribute('href') : '';
    const itemUrl = isLink ? new URL(href, window.location.href).href : window.location.href;

    items.push({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: itemUrl
    });

    return items;
  }, []);

  if (!itemListElement.length) {
    return;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
}

onDomReady(() => {
  initForm();
  prepareTextbookDetailDownloads();
  initSiteLanguageSelectors();
  initNavMenu();
  initCatalogTagFilters();
  initFaqAccordion();
  initAnimatedCounters();
  injectBreadcrumbSchema();
});
