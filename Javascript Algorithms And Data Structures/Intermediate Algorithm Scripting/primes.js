function sumPrimes(num) {

  const getPrimes = (n = 0) => { 
    const primes = n < 2 ? [] : [2];

	  for (let i = 3; i <= n; i += 2) {
		if (primes.every(x => i % x)) primes.push(i);
	  }

    return primes;
  }
  return getPrimes(num).reduce((a, b) => a + b, 0);
}

// test > node primes.js

console.log(sumPrimes(10));

