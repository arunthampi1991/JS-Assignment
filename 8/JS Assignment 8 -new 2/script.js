

 var array=[];
 var size=4;//max
for(i=0;i<=size;i++){
  array[i]=prompt('Enter Name ' + (i+1));
}
 var txt = "";

 var x;
 for (x in array) {
  txt += array[x] + ",";
}
console.log(txt);
document.getElementById("head").innerHTML = "Array is "  +txt ;


function myFunction() {
  array.sort();
  console.log(array);
  document.getElementById("answer").innerHTML = "Sorted in alphabetical order= " + array ;
}

