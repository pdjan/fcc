// Return the symmetric difference of the two arrays.
// test > node diffarrays.js

function diffArray(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {
	if (arr2.indexOf(arr1[i]) < 0) {
		newArr.push(arr1[i]);
	} else {
		arr2.splice(arr2.indexOf(arr1[i]), 1);
	}
  }
  newArr = newArr.concat(arr2);
  return newArr;
}

console.log(diffArray([1, 2, 3, 4, 5], [1, 2, 3, 5, 7]));
