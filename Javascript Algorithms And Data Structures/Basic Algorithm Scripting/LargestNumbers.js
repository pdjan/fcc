function largestOfFour(arr) {
  var res = [];
  for (let i=0; i<arr.length; i++) {
	let sub = arr[i];
    let bigest = sub[0];
    for (let j=1; j<sub.length; j++) {
      if (sub[j]>bigest) {
        bigest = sub[j];		  
	  }		  
	}
    res.push(bigest);	
  }
  return res;
}

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// node test 
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));