function steamrollArray(arr) {

  var result = [];
  
  function getElem(item) {
	if (Array.isArray(item) == false) {
      result.push(item);
	} else {
	  for (var i=0; i<item.length;i++) {
	    getElem(item[i]);
	  }
	}
  }
  arr.forEach(getElem) 
  return result;
}

// test > node steamroll.js

console.log(steamrollArray([1, [2], [3, [[4]]]]));