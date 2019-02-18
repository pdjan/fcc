function dropElements(arr, func) {

  var _switch = true;
  var res = [];
  var i = 0;
  
  while(_switch) {
	if (func(arr[i])) {
	  res = arr.slice(i);
      _switch = false;
	} else {
		if (i==arr.length-1) {
		  // end of array
		  _switch = false;
		} else {
		  i++;
		}
	}
  }
  return res;
  
}

// test > node dropit.js
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));