
var scountingLocation = ["Fargo", "LasVegas", "Newark", "London", "Bangladesh"];
alert(scountingLocation[0]);

function showListText()
{
    var myListItems = document.getElementsByTagName("li");
    for(var i = 0; i < myListItems.length; i++)
    {
        myListItems[i].innerHTML = scountingLocation[i];
    }
   
}

//  document.getElementById("sub").addEventListener("click", showListText, false);
window.addEventListener("load",showListText,false);