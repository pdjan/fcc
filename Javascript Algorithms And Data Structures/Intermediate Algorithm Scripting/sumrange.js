// sum of all numbers in range [1-4] [4-1]
// test > node sumrange.js

function sumAll(arr) {

  var delta = Math.abs(arr[1]-arr[0])-1; // koliko brojeva ima izmedju?

  if (delta % 2 == 0) { // ako ih ima paran broj 
    return (delta / 2 + 1) * (arr[0] + arr[1]);
  } else { // ako ih ima neparan broj 
    return (Math.floor(delta / 2) + 1) * (arr[0] + arr[1]) + ((arr[0] + arr[1]) / 2);  
  }
}

console.log(sumAll([1, 8]));
console.log(sumAll([8, 1]));
