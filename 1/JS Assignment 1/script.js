
 var numbers = prompt("Enter your numbers separated by a comma [Ex:34,56,23]").split(",")
 
 var n=numbers[0];


 function p() { 
   
    document.getElementById("head").innerHTML="Array is " + numbers;
    document.getElementById("para").innerHTML="The first element of array is "+n+".";
 //Checking Prime Number or not

    
    if (n===1)
    {
      return false;
      
    }
    else if(n === 2)
    {
      return true;
    }else
    {
      for(var x = 2; x < n; x++)
      {
        if(n % x === 0)
        {
          return false;
        }
      }
      return true;  
    }

}

console.log(p(n));
if(p()==true)
    document.getElementById("answer").innerHTML=n+" is a Prime number ";

else
document.getElementById("answer").innerHTML=n+" is not a Prime number";



