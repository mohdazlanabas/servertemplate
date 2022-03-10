
const pdfinputfile = document.getElementById("pdfinputfile");
const btnUpload = document.getElementById("btnUpload");
const pdftext = document.getElementById("pdftext");

btnUpload.addEventListener("click", () => {
    const formData = new FormData();

    formData.append("pdfFile", pdfinputfile.files[0]);

    fetch("/extract-text", {
        method: "post",
        body: formData
    }).then(response => {
        return response.text();
    }).then(extractedText => {
        pdftext.value = extractedText.trim();
    });
});