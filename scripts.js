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

function showDownload() {
    const language = document.getElementById("language").value;
    const downloadLink = document.getElementById("download-link");

    if (language === "english") {
        downloadLink.href = "https://uotinitiative.org/docs/6-Math-English.pdf";
        downloadLink.style.display = "inline";
    } else {
        downloadLink.style.display = "none";
    }
}

function resetSelections() {
    document.getElementById("language").innerHTML = '<option value="">Select Language</option>';
    document.getElementById("language").disabled = true;
    document.getElementById("download-link").style.display = "none";
}
