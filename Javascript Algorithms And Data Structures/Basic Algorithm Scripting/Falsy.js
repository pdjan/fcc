// exclude all false values from given array

function bouncer(arr) {

  function notFalsy(value) {
    return value;
  }
  arr = arr.filter(notFalsy);
  return arr;
}

// test node  
console.log(bouncer([7, "ate", "", false, 9]));
