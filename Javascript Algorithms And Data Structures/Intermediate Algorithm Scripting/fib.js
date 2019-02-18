function sumFibs(num) {
  
  function fib(n) {
    if ( (n == 1) || (n == 2) ) {
	  return 1;	
	} else {
      return fib(n-1)+fib(n-2);
    }	
  }
  
  var result = 0;
  var counter = 1;
  
  var fvalue = fib(counter);
  
  while ( fvalue <= num ) {
	if ( (fvalue % 2) == 1 ) {
	  result = result + fvalue;
	}
	counter++;
	fvalue = fib(counter);
  }
  return result; 
}

// test > node fib.js
console.log(sumFibs(4));