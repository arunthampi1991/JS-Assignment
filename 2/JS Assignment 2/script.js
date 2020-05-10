
 var array = prompt("Enter your items separated by a comma , include same item multiple times").split(",")

console.log(array);
 document.getElementById("head").innerHTML="Array is - " + array;
 function mostFrequent(array){
    var result = array[0];
    var tmp = 0;
    for(var i = 0; i < array.length; i++){
      var count = 0;
      for(var j = 0; j < array.length; j++){
        if(array[i]===array[j]){
          count++;
        }
      }
      if(count > tmp){
        tmp = count;
        result = array[i];
      }
      
    }
    return result;
  }
  
console.log(mostFrequent(array));
  document.getElementById("answer").innerHTML=" Most frequent element of array is - "+ mostFrequent(array);



