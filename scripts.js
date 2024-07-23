// Global constants
const WAITING_TIME = 300; // Waiting time in milliseconds

// Show learner age options based on selected language
function showLearnerAge() {
    const language = document.getElementById("language").value;
    const learnerAgeSelect = document.getElementById("learner-age");

    if (language === "english") {
        learnerAgeSelect.innerHTML = '<option value="">Select Age</option><option value="6">6</option>';
        learnerAgeSelect.disabled = false;
    } else {
        learnerAgeSelect.innerHTML = '<option value="">Select Age</option>';
        learnerAgeSelect.disabled = true;
        resetSelections("learner-age");
    }
}

// Show subject options based on selected learner age
function showSubject() {
    const learnerAge = document.getElementById("learner-age").value;
    const subjectSelect = document.getElementById("subject");

    if (learnerAge === "6") {
        subjectSelect.innerHTML = '<option value="">Select Subject</option><option value="math">Math</option>';
        subjectSelect.disabled = false;
    } else {
        subjectSelect.innerHTML = '<option value="">Select Subject</option>';
        subjectSelect.disabled = true;
        resetSelections("subject");
    }
}

// Show download link based on selected subject
function showDownload() {
    const language = document.getElementById("language").value;
    const learnerAge = document.getElementById("learner-age").value;
    const subject = document.getElementById("subject").value;
    const downloadLink = document.getElementById("download-link");
    const loadingSpinner = document.getElementById("loading-spinner");

    if (language === "english" && learnerAge === "6" && subject === "math") {
        // Show loading spinner
        loadingSpinner.style.display = "block";
        downloadLink.style.display = "none";

        // Simulate loading time
        setTimeout(() => {
            // Hide loading spinner and show download link
            loadingSpinner.style.display = "none";
            downloadLink.href = `https://uotinitiative.org/docs/${learnerAge}-${subject}-${language}.pdf`;
            downloadLink.style.display = "inline";
        }, WAITING_TIME);
    } else {
        downloadLink.style.display = "none";
        loadingSpinner.style.display = "none";
    }
}

// Reset selections and hide download link
function resetSelections(startFrom) {
    if (startFrom === "learner-age" || startFrom === "subject") {
        document.getElementById("subject").innerHTML = '<option value="">Select Subject</option>';
        document.getElementById("subject").disabled = true;
    }
    
    document.getElementById("download-link").style.display = "none";
    document.getElementById("loading-spinner").style.display = "none";
}

// Initialize the form
function initForm() {
    document.getElementById("language").addEventListener("change", showLearnerAge);
    document.getElementById("learner-age").addEventListener("change", showSubject);
    document.getElementById("subject").addEventListener("change", showDownload);
}

// Call initForm when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initForm);

// Nav link
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    function closeMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a nav link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
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
    window.addEventListener('scroll', function() {
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