function translatePigLatin(str) {
	
  function isVowel(ch){
	if (["a","e","i","u","o"].indexOf(ch) >= 0) {
      return true;
	} else {
	  return false;
	}
  }

  if ( isVowel(str[0]) ) {
	return str.concat("way"); 
  } else {
    var arr = str.split("");
    var output = [];
	
    while ( isVowel(arr[0])==false ) {
      output.push(arr[0]);
	  arr.splice(0,1);
	  if (arr.length == 0) {
		break;
	  }
    }	
	
	output = output.join("");
	arr = arr.join("");
	output = output.concat("ay");
	arr = arr.concat(output);
	return arr;
  } 
}

// test > node piglatin.js
console.log(translatePigLatin("ucrnu"));