

function calculateTotal()
{
    var itemTotal = 0;


    var checks = document.getElementsByName("check");
    for(var i = 0; i <checks.length; i++)
    {
        if(checks[i].checked == true)
        {
            itemTotal += parseInt(checks[i].value);
    
        }
        else  {
            itemTotal += 0;
        }
 
    }
    var salesTaxRate = 0.07;
    var orderTotal = itemTotal + (itemTotal * salesTaxRate);
        alert("Your total cost is : $" + orderTotal);
  
}

document.getElementById("submit").addEventListener("click",calculateTotal,false);