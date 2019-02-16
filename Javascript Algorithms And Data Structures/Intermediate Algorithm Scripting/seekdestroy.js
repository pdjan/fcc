function destroyer(arr) {
  
  var args_arr = Array.from(arguments);
  var rest_args = args_arr.slice(1, args_arr.length);
  
  var out = arr.filter(function(item){
	  return (rest_args.indexOf(item) < 0);
  });
  return out;
}

// test > node seekdestroy.js

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
