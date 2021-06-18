


function convert(){
var fValue = document.getElementById("fValue").value;
var cValue = (fValue - 32) * 5 / 9;
document.getElementById("cValue").innerHTML = cValue;
}

document.getElementById("button").addEventListener("click", convert, false);