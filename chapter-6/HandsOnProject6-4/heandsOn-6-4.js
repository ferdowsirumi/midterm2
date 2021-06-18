document.getElementById("btn1").addEventListener("click",copyFieldValues ,false);

function copyFieldValues()
{

    var firstNameInput = document.getElementById("firstnameinput").value;
    var lastNameInput = document.getElementById("lastnameinput").value;
    var addressInput = document.getElementById("addressinput").value;
    var gender = document.getElementById("gender").value;
    var phoneInput = document.getElementById("phoneinput").value;
    var year = document.getElementById("year").value;

    var firstNameInput1 = document.getElementById("firstnameinput1");
    firstNameInput1.value = firstNameInput;
    var lastNameInput1 = document.getElementById("lastnameinput1");
    lastNameInput1.value = lastNameInput;
    var addressInput1 = document.getElementById("addressinput1");
    addressInput1.value = addressInput;
    var gender1 = document.getElementById("gender1");
    gender1.value = gender;
    var phoneInput1 = document.getElementById("phoneinput1");
    phoneInput1.value  = phoneInput;
    var year1 = document.getElementById("year1");
    year1.value  = year;
}