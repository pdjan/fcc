function getIndexToIns(arr, num) {
  arr.push(num);
  console.log(arr);
  arr.sort(function(a, b){return a-b});
  console.log(arr);
  return arr.indexOf(num);
}

// getIndexToIns([40, 60], 50);

// node test 
console.log(getIndexToIns([3, 10, 5], 3));