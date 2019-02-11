function confirmEnding(str, target) {
  let l = target.length;
  let s = str.length;
  
  if (str.substring(s-l,s)==target) {
	return true;
  } else {
    return false;	  
  }
}

// confirmEnding("Bastian", "n");

// node test 
console.log(confirmEnding("Bastian", "n"));