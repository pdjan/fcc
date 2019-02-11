function chunkArrayInGroups(arr, size) {
	
  let limit = arr.length;
  let res = [];
  let counter = 0;
  
  while ((counter+size) <= arr.length) {
    
	console.log(res);
	console.log(counter);
    res.push(arr.slice(counter,counter+size));
    counter = counter + size;
	console.log(res);
	console.log(counter);
  }
  if ((counter) < arr.length) {
    res.push(arr.slice(counter, arr.length));	  
  }
  return res;
}

// chunkArrayInGroups(["a", "b", "c", "d"], 2);

// node test 
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7], 3));
// console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 2));