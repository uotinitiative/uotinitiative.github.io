// Global constants
const WAITING_TIME = 300; // Waiting time in milliseconds

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
        resetSelections();
    }
}

// Show language options based on selected subject
function showLanguage() {
    const subject = document.getElementById("subject").value;
    const languageSelect = document.getElementById("language");

    if (subject === "math") {
        languageSelect.innerHTML = '<option value="">Select Language</option><option value="english">English</option>';
        languageSelect.disabled = false;
    } else {
        languageSelect.innerHTML = '<option value="">Select Language</option>';
        languageSelect.disabled = true;
        resetSelections();
    }
}

// Show download link based on selected language
function showDownload() {
    const language = document.getElementById("language").value;
    const downloadLink = document.getElementById("download-link");
    const loadingSpinner = document.getElementById("loading-spinner");

    if (language === "english") {
        // Show loading spinner
        loadingSpinner.style.display = "block";
        downloadLink.style.display = "none";

        // Simulate loading time
        setTimeout(() => {
            // Hide loading spinner and show download link
            loadingSpinner.style.display = "none";
            downloadLink.href = "https://uotinitiative.org/docs/6-Math-English.pdf";
            downloadLink.style.display = "inline";
        }, WAITING_TIME);
    } else {
        downloadLink.style.display = "none";
        loadingSpinner.style.display = "none";
    }
}

// Reset selections and hide download link
function resetSelections() {
    document.getElementById("language").innerHTML = '<option value="">Select Language</option>';
    document.getElementById("language").disabled = true;
    document.getElementById("download-link").style.display = "none";
    document.getElementById("loading-spinner").style.display = "none";
}