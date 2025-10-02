// Configuration object
const CONFIG = { languages: {} };
let catalogReady = false;
let catalogLoadPromise = null;

const UI_STRINGS = {
    en: {
        selectOption: 'Select Option',
        selectLanguage: 'Select Language',
        selectAge: 'Select Age',
        selectSubject: 'Select Subject',
        catalogUnavailable: 'Catalog unavailable',
        downloadFailed: 'Sorry, the download failed. Please try again.',
        downloadUnavailable: 'Download unavailable'
    },
    zh: {
        selectOption: '请选择',
        selectLanguage: '选择语言',
        selectAge: '选择学习者年龄',
        selectSubject: '选择学科',
        catalogUnavailable: '目录不可用',
        downloadFailed: '抱歉，下载失败。请重试。',
        downloadUnavailable: '暂时无法下载'
    }
};

function getUiLanguage() {
    const langAttr = (document.documentElement.lang || '').toLowerCase();
    if (langAttr.startsWith('zh')) {
        return 'zh';
    }
    return 'en';
}

function t(key) {
    const lang = getUiLanguage();
    const langStrings = UI_STRINGS[lang] || UI_STRINGS.en;
    return langStrings[key] || UI_STRINGS.en[key] || key;
}

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
const DETAIL_PAGE_LANGUAGE_SUFFIX = {
    arabic: '-ar',
    spanish: '-es',
    chinese: '-zh',
    polish: '-pl',
};

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
    if (!catalogLoadPromise) {
        catalogLoadPromise = fetch('data/catalog.json', { cache: 'no-store' })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load catalog: ${response.status}`);
                }
                return response.json();
            })
            .then(entries => {
                const normalizedEntries = Array.isArray(entries) ? entries : [];
                const map = buildConfigMap(normalizedEntries);
                CONFIG.languages = map.languages;
                catalogReady = true;
                return CONFIG;
            })
            .catch(error => {
                console.error('Catalog data failed to load', error);
                catalogReady = false;
                catalogLoadPromise = null;
                throw error;
            });
    }

    return catalogLoadPromise;
}

function disableDownloadLink() {
    const downloadLink = document.getElementById("download-link");
    if (!downloadLink) {
        return;
    }
    downloadLink.classList.add("disabled");
    downloadLink.classList.remove("download-link-active");
    downloadLink.setAttribute("aria-disabled", "true");
    downloadLink.setAttribute("tabindex", "-1");
    downloadLink.href = "#";
}

function enableDownloadLink(url) {
    const downloadLink = document.getElementById("download-link");
    if (!downloadLink) {
        return;
    }
    downloadLink.classList.remove("disabled");
    downloadLink.classList.add("download-link-active");
    downloadLink.removeAttribute("aria-disabled");
    downloadLink.removeAttribute("tabindex");
    downloadLink.href = url;
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

    if (DETAIL_PAGE_MAP[folderName]) {
        return DETAIL_PAGE_MAP[folderName];
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

    if (languagePrefix === 'english') {
        return englishSlug;
    }

    const suffix = DETAIL_PAGE_LANGUAGE_SUFFIX[languagePrefix];
    if (!suffix) {
        return null;
    }

    return `${englishSlug}${suffix}`;
}

// Prepare signed URLs for textbook detail download links
function prepareTextbookDetailDownloads() {
    const detailLinks = document.querySelectorAll('.textbook-download');
    if (!detailLinks.length) {
        return;
    }

    detailLinks.forEach(link => {
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

        fetch(`https://uoti-vercel-api.vercel.app/api/download?file=${encodeURIComponent(linkTarget)}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Failed to fetch signed URL: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                if (!data || !data.url) {
                    throw new Error('Response missing URL');
                }
                link.href = data.url;
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
            })
            .catch(error => {
                console.error('Signed download link failed to load', error);
                link.classList.remove('textbook-download--loading');
                link.classList.add('textbook-download--error');
                link.textContent = t('downloadUnavailable');
                link.setAttribute('data-download-state', 'error');
                link.removeAttribute('tabindex');
                link.removeAttribute('aria-disabled');
                link.removeAttribute('target');
                link.href = '#';
            });
    });
}

// Helper function to populate select options
function populateSelect(selectId, options, defaultText = t('selectOption')) {
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
    populateSelect("learner-age", ages, t('selectAge'));
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
    populateSelect("subject", subjects, t('selectSubject'));
    resetSelections("subject");
}

// Show download link based on selected subject
function showDownload() {
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

    fetch(`https://uoti-vercel-api.vercel.app/api/download?file=${encodeURIComponent(pdfUrl)}`)
        .then(res => res.json())
        .then(data => {
            enableDownloadLink(data.url);
        })
        .catch(err => {
            console.error("Failed to fetch signed URL", err);
            disableDownloadLink();
            alert(t('downloadFailed'));
        });
}

// Reset selections and hide download link
function resetSelections(startFrom) {
    if (startFrom === "language") {
        const learnerAgeSelect = document.getElementById("learner-age");
        if (learnerAgeSelect) {
            learnerAgeSelect.innerHTML = `<option value="">${t('selectAge')}</option>`;
            learnerAgeSelect.disabled = true;
            updateSelectTitle(learnerAgeSelect);
        }
    }
    if (startFrom === "language" || startFrom === "learner-age") {
        const subjectSelect = document.getElementById("subject");
        if (subjectSelect) {
            subjectSelect.innerHTML = `<option value="">${t('selectSubject')}</option>`;
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
        populateSelect("language", CONFIG.languages, t('selectLanguage'));
    } catch (error) {
        languageSelect.innerHTML = `<option value="">${t('catalogUnavailable')}</option>`;
        languageSelect.disabled = true;
        resetSelections("language");
    }
}

function initSiteLanguageSelectors() {
    const documentLang = (document.documentElement.lang || '').toLowerCase();
    const selectors = document.querySelectorAll('[data-language-switcher]');

    if (!selectors.length) {
        return;
    }

    selectors.forEach(select => {
        const options = Array.from(select.options || []);
        const matchingOption = options.find(option => {
            return (option.dataset.lang || '').toLowerCase() === documentLang;
        });

        if (matchingOption) {
            select.value = matchingOption.value;
        }

        select.addEventListener('change', event => {
            const target = event.currentTarget;
            if (!target) {
                return;
            }

            const selectedOption = target.selectedOptions && target.selectedOptions[0];
            const nextLocation = selectedOption ? selectedOption.value : '';

            if (nextLocation) {
                window.location.href = nextLocation;
            }
        });
    });
}

// Call initForm when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initForm);
document.addEventListener("DOMContentLoaded", prepareTextbookDetailDownloads);
document.addEventListener('DOMContentLoaded', initSiteLanguageSelectors);

// Nav link
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    function closeMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a nav link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Function to check if scrolling is possible
    function isScrollable() {
        return document.documentElement.scrollHeight > document.documentElement.clientHeight;
    }

    // Close menu immediately when scrolling starts, but only if scrolling is possible
    window.addEventListener('scroll', function () {
        if (navMenu.classList.contains('active') && isScrollable()) {
            closeMenu();
        }
    }, { passive: true });

    // Check for changes in page content that might affect scrollability
    const resizeObserver = new ResizeObserver(() => {
        if (navMenu.classList.contains('active') && !isScrollable()) {
            navMenu.classList.add('no-scroll');
        } else {
            navMenu.classList.remove('no-scroll');
        }
    });

    resizeObserver.observe(document.body);
});

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

document.querySelectorAll('.tag').forEach(tag => {
  tag.addEventListener('click', () => {
    const value = tag.dataset.filter;

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

// FAQ
  document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq-question.collapsible');
    
    questions.forEach(q => {
      q.addEventListener('click', () => {
        q.classList.toggle('active');
        const answer = q.nextElementSibling;
        if (answer.style.display === 'block') {
          answer.style.display = 'none';
        } else {
          answer.style.display = 'block';
        }
      });
    });
  });

// Stats
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const update = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
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
});
