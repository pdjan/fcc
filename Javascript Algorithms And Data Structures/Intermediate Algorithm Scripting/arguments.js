function addTogether() {

    var args = [...arguments];

	if(args.length == 2){
    	if(typeof args[0] !== 'number' || typeof args[1] !=='number' ){
	      return undefined;
	    }
	    return args[0]+args[1];
    } else {

	a = args[0];

	if(typeof a!=='number'){
		return undefined;
	}
	else {
	   return function(b){
		 if(typeof b !=='number'){
		   return undefined;
		   }
		 else
		   return a+b;
		  };
	  }
    }
}

// test > node arguments.js

console.log(addTogether(2,3));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2)([3]));