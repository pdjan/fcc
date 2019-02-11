function titleCase(str) {
  
  let arr = str.toLowerCase().split(" ");
  console.log(arr);
  let res = "";
  for (let i=0; i<arr.length;i++) {
	
    res = res.concat(arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + " ");
  }
  return res.substring(0,res.length-1);
}

// titleCase("I'm a little tea pOT");

// node test 
console.log(titleCase("I'm a little tea pot"));