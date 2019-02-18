function smallestCommons(arr) {

  arr.sort((a, b) => a - b);

  let c = arr[0] + 1;
  let limit = arr[1];
  
  while ( c < limit ) {
    arr.splice(arr.length-1, 0, c);
	c++;
  } 

  var lcm = arr[0];
  for (var i=1; i<arr.length;i++) {
    var _gcd = gcd(lcm, arr[i]);
    lcm = (lcm * arr[i]) / _gcd;
  }
  return lcm;

  function gcd(x,y) {
    if (y===0) {
      return x;
	} else {
    return gcd(y, x % y);
	}	 
  }
}

// test > node smallestCommons.js

console.log(smallestCommons([1,5]));