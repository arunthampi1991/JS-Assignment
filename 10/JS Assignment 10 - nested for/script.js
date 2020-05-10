 var txt=""
 var i,result,str
 str="****"
 for(i=1;i<=str.length;i++)
 {
   for(j=1;j<=i;j++){
   result = str.substr(0,j)
   }
   txt+=result+ "<br>"
   
    
 }
 console.log(txt);
 document.getElementById("answer").innerHTML=txt;