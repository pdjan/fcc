function myReplace(str, before, after) {

  // check if first letter in 'before' is upper case
  var upper = (before[0]==before[0].toUpperCase());
  
  // split the string
  var array = str.split(before);
  // console.log(array);
  
  // insert 'after' taking care of first letter 
  if (upper) {
    var afterUp = after[0].toUpperCase().concat(after.slice(1));
    // console.log("afterUp ");
    // console.log(afterUp);	
  } else {
	var afterUp = after[0].toLowerCase().concat(after.slice(1));
	// console.log("afterUp ");
    // console.log(afterUp);
  }
  array.splice(1, 0, afterUp);
  // console.log(array);
  
  // join the array and return 
  // console.log(array.join(""));
  return array.join("");
  
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));