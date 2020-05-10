


 var num1, num2;
 num1 = window.prompt("Input the First Integer", "0");
 document.getElementById("num1").innerHTML="First Integer = " + num1;
 num2 = window.prompt("Input the second integer", "0");

 document.getElementById("num2").innerHTML="Second Integer = " + num2;     
 
 function findlarge()
 {                                         
 if(parseInt(num1, 10) > parseInt(num2, 10)) 
   { 
   console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
   document.getElementById("answer").innerHTML="First Integer " + num1 + " is larger";

   }   
 else
   if(parseInt(num2, 10) > parseInt(num1, 10))  
   {
   console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
   document.getElementById("answer").innerHTML= "Second Integer "+ num2 + " is larger";
   }                  
 else
   {
    console.log("The values "+ num1+ " and "+num2+ " are equal.");
    document.getElementById("answer").innerHTML="Both Integers are equal";
   }

  }



