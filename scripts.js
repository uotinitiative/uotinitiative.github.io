// Configuration object
const CONFIG = {
    languages: {
        "English": {
            ages: {
                "11 (US Grade 6)": {
                    subjects: {
                        "Math": "English/english_11_math/english_11_math.pdf",
                    }
                },

                "12 (US Grade 7)": {
                    subjects: {
                        "Math": "English/english_12_math/english_12_math.pdf",
                    }
                },

                "13 (US Grade 8)": {
                    subjects: {
                        "Prealgebra": "English/english_13_prealgebra/english_13_prealgebra.pdf",
                    }
                },

                "14 (US Grade 9)": {
                    subjects: {
                        "Algebra 1 (Elementary Algebra)": "English/english_14_algebra_1_elementary_algebra/english_14_algebra_1_elementary_algebra.pdf",
                    }
                },

                "15 (US Grade 10)": {
                    subjects: {
                        "Algebra 2 (Intermediate Algebra)": "English/english_15_algebra_2_intermediate_algebra/english_15_algebra_2_intermediate_algebra.pdf",
                    }
                },

                "16 (US Grade 11)": {
                    subjects: {
                        "Algebra with Trigonometry": "English/english_16_algebra_with_trigonometry/english_16_algebra_with_trigonometry.pdf",
                        "Introductory Physics (Algebra-Based)": "English/english_16_introductory_physics_algebra_based/english_16_introductory_physics_algebra_based.pdf",
                    }
                },

                "17 (US Grade 12)": {
                    subjects: {
                        "College Algebra (Non-STEM Track)": "English/english_17_college_algebra_non_stem_track/english_17_college_algebra_non_stem_track.pdf",
                        "Introductory Statistics": "English/english_17_introductory_statistics/english_17_introductory_statistics.pdf",
                        "Precalculus": "English/english_17_precalculus/english_17_precalculus.pdf",
                    }
                },

                "18 (US Bachelor's 1)": {
                    subjects: {
                        "Anatomy and Physiology": "English/english_18_anatomy_and_physiology/english_18_anatomy_and_physiology.pdf",
                        "Anthropology": "English/english_18_anthropology/english_18_anthropology.pdf",
                        "Astronomy": "English/english_18_astronomy/english_18_astronomy.pdf",
                        "Biology for Non-Science Majors": "English/english_18_biology_for_non_science_majors/english_18_biology_for_non_science_majors.pdf",
                        "Biology for Science Majors": "English/english_18_biology_for_science_majors/english_18_biology_for_science_majors.pdf",
                        "Biosystems Engineering": "English/english_18_biosystems_engineering/english_18_biosystems_engineering.pdf",
                        "Calculus: Volume 1": "English/english_18_calculus_vol_1/english_18_calculus_vol_1.pdf",
                        "Calculus: Volume 2": "English/english_18_calculus_vol_2/english_18_calculus_vol_2.pdf",
                        "Calculus: Volume 3": "English/english_18_calculus_vol_3/english_18_calculus_vol_3.pdf",
                        "Chemistry": "English/english_18_chemistry/english_18_chemistry.pdf",
                        "Foundations of Computation": "English/english_18_foundations_of_computation/english_18_foundations_of_computation.pdf",
                        "Macroeconomics": "English/english_18_macroeconomics/english_18_macroeconomics.pdf",
                        "Mathematics for Liberal Arts Majors": "English/english_18_mathematics_for_liberal_arts_majors/english_18_mathematics_for_liberal_arts_majors.pdf",
                        "Microeconomics": "English/english_18_microeconomics/english_18_microeconomics.pdf",
                        "Philosophy": "English/english_18_philosophy/english_18_philosophy.pdf",
                        "Physics (Algebra-Based)": "English/english_18_physics_algebra_based/english_18_physics_algebra_based.pdf",
                        "Physics (Calculus-Based): Volume 1": "English/english_18_physics_calculus_based_vol_1/english_18_physics_calculus_based_vol_1.pdf",
                        "Physics (Calculus-Based): Volume 2": "English/english_18_physics_calculus_based_vol_2/english_18_physics_calculus_based_vol_2.pdf",
                        "Physics (Calculus-Based): Volume 3": "English/english_18_physics_calculus_based_vol_3/english_18_physics_calculus_based_vol_3.pdf",
                        "Political Science": "English/english_18_political_science/english_18_political_science.pdf",
                        "Psychology": "English/english_18_psychology/english_18_psychology.pdf",
                        "Python Programming": "English/english_18_python_programming/english_18_python_programming.pdf",
                        "Sociology": "English/english_18_sociology/english_18_sociology.pdf",
                        "Statistics": "English/english_18_statistics/english_18_statistics.pdf",
                        "Workplace Software and Skills": "English/english_18_workplace_software_and_skills/english_18_workplace_software_and_skills.pdf",
                    }
                },

                "19 (US Bachelor's 2)": {
                    subjects: {
                        "Discrete Structures": "English/english_19_discrete_structures/english_19_discrete_structures.pdf",
                        "Linear Algebra": "English/english_19_linear_algebra/english_19_linear_algebra.pdf",
                        "Microbiology for Non-Majors": "English/english_19_microbiology_for_non_majors/english_19_microbiology_for_non_majors.pdf",
                        "Organic Chemistry": "English/english_19_organic_chemistry/english_19_organic_chemistry.pdf",
                    }
                },

                "20 (US Bachelor's 3)": {
                    subjects: {
                        "Abstract Algebra": "English/english_20_abstract_algebra/english_20_abstract_algebra.pdf",
                        "Differential Equations": "English/english_20_differential_equations/english_20_differential_equations.pdf",
                        "Electromagnetics: Volume 1": "English/english_20_electromagnetics_volume_1/english_20_electromagnetics_volume_1.pdf",
                        "Electromagnetics: Volume 2": "English/english_20_electromagnetics_volume_2/english_20_electromagnetics_volume_2.pdf",
                        "Linear, Time-Invariant, Dynamic Systems": "English/english_20_linear_time_invariant_dynamic_systems/english_20_linear_time_invariant_dynamic_systems.pdf",
                    }
                },

                "21 (US Bachelor's 4)": {
                    subjects: {
                        "Complex Analysis": "English/english_21_complex_analysis/english_21_complex_analysis.pdf",
                        "Optics": "English/english_21_optics/english_21_optics.pdf",
                        "Real Analysis (Advanced Calculus): Volume 1": "English/english_21_real_analysis_advanced_calculus_volume_1/english_21_real_analysis_advanced_calculus_volume_1.pdf",
                        "Real Analysis (Advanced Calculus): Volume 2": "English/english_21_real_analysis_advanced_calculus_volume_2/english_21_real_analysis_advanced_calculus_volume_2.pdf",
                    }
                },

                "22 (US Master's 1)": {
                    subjects: {
                        "Coastal Dynamics": "English/english_22_coastal_dynamics/english_22_coastal_dynamics.pdf",
                        "Structured Electronics Design": "English/english_22_structured_electronics_design/english_22_structured_electronics_design.pdf",
                        "Traffic Flow Theory": "English/english_22_traffic_flow_theory/english_22_traffic_flow_theory.pdf",
                    }
                },

                "23 (US Master's 2)": {
                    subjects: {
                        "Quantum Electrical Circuits": "English/english_23_quantum_electrical_circuits/english_23_quantum_electrical_circuits.pdf",
                    }
                }
            }
        },

        "العربية": {
            ages: {
                "18 (بكالوريوس الولايات المتحدة الأمريكية 1)": {
                    subjects: {
                        "علم الأحياء لتخصصات العلوم": "Arabic/arabic_18_biology_for_science_majors/arabic_18_biology_for_science_majors.pdf",
                        "حساب التفاضل والتكامل: المجلد 1": "Arabic/arabic_18_calculus_vol_1/arabic_18_calculus_vol_1.pdf",
                        "الاقتصاد الكلي": "Arabic/arabic_18_macroeconomics/arabic_18_macroeconomics.pdf",

                    }
                },

                "20 (بكالوريوس الولايات المتحدة الأمريكية 3)": {
                                    subjects: {
                                        "كتاب الجبر التجريدي": "Arabic/arabic_20_abstract_algebra/arabic_20_abstract_algebra.pdf",
                     }
                },
            }
        },

        "Español": {
            ages: {
                "17 (US grado 12)": {
                    subjects: {
                        "Precálculo": "Spanish/spanish_17_precalculus/spanish_17_precalculus.pdf",
                    }
                },

                "18 (US licenciatura 1)": {
                    subjects: {
                        "Cálculo: Volumen 1": "Spanish/spanish_18_calculus_vol_1/spanish_18_calculus_vol_1.pdf",
                        "Cálculo: Volumen 2": "Spanish/spanish_18_calculus_vol_2/spanish_18_calculus_vol_2.pdf",
                        "Cálculo: Volumen 3": "Spanish/spanish_18_calculus_vol_3/spanish_18_calculus_vol_3.pdf",
                        "Química": "Spanish/spanish_18_chemistry/spanish_18_chemistry.pdf",
                        "Física (con base en cálculo): Volumen 1": "Spanish/spanish_18_physics_calculus_based_vol_1/spanish_18_physics_calculus_based_vol_1.pdf",
                        "Física (con base en cálculo): Volumen 2": "Spanish/spanish_18_physics_calculus_based_vol_2/spanish_18_physics_calculus_based_vol_2.pdf",
                        "Física (con base en cálculo): Volumen 3": "Spanish/spanish_18_physics_calculus_based_vol_3/spanish_18_physics_calculus_based_vol_3.pdf",
                        "Estadística": "Spanish/spanish_18_statistics/spanish_18_statistics.pdf",
                    }
                },

                "20 (US licenciatura 3)": {
                    subjects: {
                        "Algebra Abstracta": "Spanish/spanish_20_abstract_algebra/spanish_20_abstract_algebra.pdf",
                    }
                }
            }
        },

        "中文 (简体)": {
            ages: {
                "18 (美国学士学位 1)": {
                    subjects: {
                        "理科专业的生物学": "Chinese/chinese_18_biology_for_science_majors/chinese_18_biology_for_science_majors.pdf",
                        "微积分第一册": "Chinese/chinese_18_calculus_vol_1/chinese_18_calculus_vol_1.pdf",

                    }
                },

                "20 (美国学士学位 3)": {
                    subjects: {
                        "抽象代数": "Chinese/chinese_20_abstract_algebra/chinese_20_abstract_algebra.pdf",
                    }
                }
            }
        },

        "Polski": {
            ages: {
                "18 (licencjat amerykański 1)": {
                    subjects: {
                            "Makroekonomia": "Polish/polish_18_macroeconomics/polish_18_macroeconomics.pdf",
                            "Mikroekonomia": "Polish/polish_18_microeconomics/polish_18_microeconomics.pdf",
                            "Fizyka (z elementami analizy matematycznej): Tom I": "Polish/polish_18_physics_calculus_based_vol_1/polish_18_physics_calculus_based_vol_1.pdf",
                            "Fizyka (z elementami analizy matematycznej): Tom II": "Polish/polish_18_physics_calculus_based_vol_2/polish_18_physics_calculus_based_vol_2.pdf",
                            "Fizyka (z elementami analizy matematycznej): Tom III": "Polish/polish_18_physics_calculus_based_vol_3/polish_18_physics_calculus_based_vol_3.pdf",
                            "Psychologia": "Polish/polish_18_psychology/polish_18_psychology.pdf",
                            }
                        }
                    }
                }
    }
};

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
    select.innerHTML = `<option value="">${defaultText}</option>`;
    Object.keys(options).forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = key;
        select.appendChild(option);
    });
    select.disabled = Object.keys(options).length === 0;
}

// Show learner age options based on selected language
function showLearnerAge() {
    const language = document.getElementById("language").value;
    const ages = language ? CONFIG.languages[language].ages : {};
    populateSelect("learner-age", ages, "Select Age");
    resetSelections("learner-age");
}

// Show subject options based on selected learner age
function showSubject() {
    const language = document.getElementById("language").value;
    const age = document.getElementById("learner-age").value;
    const subjects = (language && age) ? CONFIG.languages[language].ages[age].subjects : {};
    populateSelect("subject", subjects, "Select Subject");
    resetSelections("subject");
}

// Show download link based on selected subject
function showDownload() {
    const language = document.getElementById("language").value;
    const age = document.getElementById("learner-age").value;
    const subject = document.getElementById("subject").value;

    if (!(language && age && subject)) {
        disableDownloadLink();
        return;
    }

    const pdfUrl = CONFIG.languages[language].ages[age].subjects[subject];

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
        document.getElementById("learner-age").innerHTML = '<option value="">Select Age</option>';
        document.getElementById("learner-age").disabled = true;
    }
    if (startFrom === "language" || startFrom === "learner-age") {
        document.getElementById("subject").innerHTML = '<option value="">Select Subject</option>';
        document.getElementById("subject").disabled = true;
    }

    disableDownloadLink();
}

// Initialize the form
function initForm() {
    populateSelect("language", CONFIG.languages, "Select Language");
    document.getElementById("language").addEventListener("change", showLearnerAge);
    document.getElementById("learner-age").addEventListener("change", showSubject);
    document.getElementById("subject").addEventListener("change", showDownload);
    disableDownloadLink();
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
