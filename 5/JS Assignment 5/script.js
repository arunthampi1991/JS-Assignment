

 document.getElementById("head").innerHTML="Array is [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]";
 var text ="";
 for (var x=0; x<=15; x++) {
  if (x === 0) {
          console.log(x +  " is even");
          text += x + " is even" + "<br>";
  }
  else if (x % 2 === 0) {
          console.log(x + " is even"); 
          text += x + " is even" + "<br>";  
  }
  else {
          console.log(x + " is odd");
          text += x + " is odd" + "<br>";
  }
}
document.getElementById("log").innerHTML = text;





 //  function abc(a){

//   for(var i=0;i<=a;i++){
  
//   if(i%2===0){document.write(i+""+"is even." + "<br>")}
  
//   else{document.write(i+""+"is odd." + "<br>")}
  
//   }
  
//   }
  
//   abc(15);



