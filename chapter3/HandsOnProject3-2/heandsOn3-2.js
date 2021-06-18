

function insertPlaceholders() {
    if (!Modernizr.input.placeholder) {
    document.getElementById("nameinput").value = "first and last name";
    document.getElementById("emailinput").value = "address@example.com";
    document.getElementById("phoneinput").value = "###-###-####";
}
}


if (window.addEventListener) { window.addEventListener("load", insertPlaceholders,
false);
} else if (window.attachEvent) {
window.attachEvent("onload", insertPlaceholders,false)}; 