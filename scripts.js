// Configuration object
// Catalog configuration is populated at runtime from data/catalog.json
const CONFIG = { languages: {} };
let catalogReady = false;
let catalogLoadPromise = null;

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

    return { languages }; // keep downstream access identical to the legacy CONFIG shape
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
    downloadLink.removeAttribute("aria-disabled");
    downloadLink.removeAttribute("tabindex");
    downloadLink.href = url;
}

// Helper function to populate select options
function populateSelect(selectId, options, defaultText = "Select Option") {
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
    populateSelect("learner-age", ages, "Select Age");
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
    populateSelect("subject", subjects, "Select Subject");
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

    fetch(`https://uoti-vercel-api.vercel.app/api/download?file=${encodeURIComponent(pdfUrl)}`)
        .then(res => res.json())
        .then(data => {
            enableDownloadLink(data.url);
        })
        .catch(err => {
            console.error("Failed to fetch signed URL", err);
            disableDownloadLink();
            alert("Sorry, the download failed. Please try again.");
        });
}

// Reset selections and hide download link
function resetSelections(startFrom) {
    if (startFrom === "language") {
        const learnerAgeSelect = document.getElementById("learner-age");
        if (learnerAgeSelect) {
            learnerAgeSelect.innerHTML = '<option value="">Select Age</option>';
            learnerAgeSelect.disabled = true;
            updateSelectTitle(learnerAgeSelect);
        }
    }
    if (startFrom === "language" || startFrom === "learner-age") {
        const subjectSelect = document.getElementById("subject");
        if (subjectSelect) {
            subjectSelect.innerHTML = '<option value="">Select Subject</option>';
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
        populateSelect("language", CONFIG.languages, "Select Language");
    } catch (error) {
        languageSelect.innerHTML = '<option value="">Catalog unavailable</option>';
        languageSelect.disabled = true;
        resetSelections("language");
    }
}

// Call initForm when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initForm);

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

    filterAndHighlight(); // re-run filtering
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
