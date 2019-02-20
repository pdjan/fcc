function palindrome(str) {

  var newstr = str.toLowerCase();

  var finalstr = newstr.replace(/[^a-zA-Z\d]/g,'');

  for (var i = 0; i < finalstr.length / 2; i++) {
	  if (finalstr[i] !== finalstr[finalstr.length-i-1]) {
		  return false;
	  }
  }
  return true;
}

// test > node palindrom.js

console.log(palindrome("eye"));
