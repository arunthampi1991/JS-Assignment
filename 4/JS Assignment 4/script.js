
 var numbers = prompt("Enter numbers separated by a comma [Ex:34,56,23]").split(",");
 document.getElementById("head").innerHTML="Array is " + numbers;
  
 //Square 
 function sum_sq(numbers) {
  var sum = 0, 
      i = numbers.length;
  while (i--) 
   sum += Math.pow(numbers[i], 2);
  return sum;
}
 
console.log(sum_sq(numbers)); 

document.getElementById("answer").innerHTML="Sum of squares of the elements of array = "+sum_sq(numbers);





