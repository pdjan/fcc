function mutation(arr) {
  let arr1 = arr[0].split("");
  let arr2 = arr[1].split("");
  console.log(arr1);
  for (let i=0; i<arr2.length;i++) {
	console.log(arr2[i]);
    if (arr1.indexOf(arr2[i])<0) {
	  console.log("stop!");
      return false;
      break;
    }
  }
  return true;
}

// mutation(["hello", "hey"]);

// node test
console.log(mutation(["hello", "heo"]));