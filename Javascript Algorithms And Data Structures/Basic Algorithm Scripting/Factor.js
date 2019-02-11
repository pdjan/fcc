function factorialize(num) {
  var temp = num;
  var res = 1;
  while (temp > 1) {
	res = res * temp;
	temp--;
  }
  return res;
}

factorialize(5);

// node test
// console.log(factorialize(0));