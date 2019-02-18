function uniteUnique(arr) {
	 
  var c = 0;
  var output = [];
  
  while ( c < arguments.length ) {
	var cal = arguments[c].length; // current array length 
	var c1 = 0;
	while ( c1 < cal ) {
		if ( output.indexOf(arguments[c][c1]) < 0 ) {
		  output.push(arguments[c][c1]);
		}	
		c1++;
	}	
	c++;
  }  

  return output;
}

// test > node uniteunique.js

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));