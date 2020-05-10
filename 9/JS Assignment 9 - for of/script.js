 var txt=""
 var i,str,newStr
 str="JavaScript"
 for(i=1;i<=str.length;i++)
 {
   
    newStr="";
    for(const letter of str.substring(0,i)){
      newStr+=letter;
    }

 console.log(newStr);
   txt+=(newStr+"<br>");
  }
    document.getElementById("answer").innerHTML=txt+"<br>";
 