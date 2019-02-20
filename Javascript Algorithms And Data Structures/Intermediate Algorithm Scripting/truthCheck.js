function truthCheck(collection, pre) {
  return collection.every(item => item[pre]);
}

// test > node truthCheck.js

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"));