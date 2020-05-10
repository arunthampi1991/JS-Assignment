
 text_truncate = function(str, length) {
  if (length == null) {
    length = 100;
  }

  if (str.length > length) {
    return str.substring(0, length);
  } else {
    return str;
  }

};
console.log(text_truncate('We are doing JS string exercises.'))
document.getElementById("head").innerHTML="String is = " + text_truncate('We are doing JS string exercises.');
console.log(text_truncate('We are doing JS string exercises.',20))
document.getElementById("answer").innerHTML="Truncated String after 20 charachters is = " + text_truncate('We are doing JS string exercises.',20);

