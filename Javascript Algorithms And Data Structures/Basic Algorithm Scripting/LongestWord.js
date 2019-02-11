function findLongestWordLength(str) {

  let arr = str.split(" ");
  let longest = arr[0];
  
  for (let i=1;i<arr.length;i++) {
    if (arr[i].length >= longest.length) {
	  longest = arr[i];
	  // console.log(longest);
    }
  }
  return longest.length;
}

// findLongestWordLength("The quick brown fox jumped over the lazy dog");

// node test 
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));