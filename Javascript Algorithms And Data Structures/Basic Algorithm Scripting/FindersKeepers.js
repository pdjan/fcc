function findElement(arr, func) {
  for (let i=0; i<arr.length; i++) {
    if (func(arr[i])==true) {
      return arr[i];
      break;
    }
  }

  return undefined;
}

// findElement([1, 2, 3, 4], num => num % 2 === 0);

// node test 
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));