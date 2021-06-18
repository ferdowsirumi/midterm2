



var daysofWeek = ["Sunday", "Monday", "Tuesday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"];
var opponents =
    ["Lightning", "Combines", "Combines", "Combines",
    "Lightning", "Lightning", "Lightning",
    "Barn Raisers", "Barn Raisers", "Barn Raisers",
    "Sodbusters", "(off)", "River Riders",
    "River Riders", "River Riders", "Big Dippers",
    "Big Dippers", "Big Dippers", "(off)",
    "Sodbusters", "Sodbusters", "Sodbusters",
    "Combines", "Combines", "Combines", "(off)",
    "(off)","Combines", "Combines","Big Dippers", "(off)"];
var gameLocation =
    ["away", "away", "away", "away", "home", "home",
    "home", "home", "home", "home", "home", "away",
    "away", "away", "away", "", "away", "away", "away",
    "away", "away", "away", "", "home", "home", "home",
    "home", "home", "home", "", ""];
    
function addColumnsHeaders()
{
    var myHeaderList = document.getElementsByTagName("th");
    for(var i =0;i <myHeaderList.length; i++)
    {
        myHeaderList[i].innerHTML = daysofWeek[i];
    }
}

function addCalendarDates()
{
    var paragraph = "";
   for(var i = 1; i <32; i++)
   {
       var tableell = document.getElementById("08-"+i);
    paragraph = tableell.getElementsByTagName("p");
       paragraph[0].innerHTML= i;
   }
}

function addGameInfo()
{
    var paragraph = "";
   for(var i = 0; i <32; i++)
{       var date = i+1;
       var tablecell = document.getElementById("08-"+ date);
        paragraph= tablecell.getElementsByTagName("p");

        if(gameLocation[i] == "away"){
            paragraph[1].innerHTML = "@";
        }
        else{
            paragraph[1].innerHTML = "vs";

        }
       paragraph[1].innerHTML += opponents[i];
   }
}


function setUpPage()
{
    addColumnsHeaders();
    addCalendarDates();
    addGameInfo();
}
window.addEventListener("load", setUpPage,false);