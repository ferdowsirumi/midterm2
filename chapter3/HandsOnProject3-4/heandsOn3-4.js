

    var scountingLocation = ["Fargo", "LasVegas", "Newark", "London", "Bangladesh"];


function showListText()
{
    var inputValue = document.getElementById("toolBox").value;
    scountingLocation.push(inputValue);

    var myListItems = document.getElementsByTagName("li");
    for(var i = 0; i < myListItems.length; i++)
    {
        myListItems[i].innerHTML = scountingLocation[i];
    }
   
}

  document.getElementById("button").addEventListener("click", showListText, false);