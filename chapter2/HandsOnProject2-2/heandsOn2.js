

function submitInfo()
{
    var nameInput = document.getElementById("nameinput").value;
    var emailInput = document.getElementById("emailinput").value;
    var phoneInput = document.getElementById("phoneinput").value;
    if(nameInput && emailInput && phoneInput  != null)
    {
        alert("Thank you...");
    }
    else{
        alert("Please fill your input field first");
    }
    
}
document.getElementById("submit").addEventListener("click", submitInfo, false);