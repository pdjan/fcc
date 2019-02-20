function repeat(str, times){
    var a = [];
    while(a.length < times){
        a.push(str);
    }
    return a.join('');
}

function convertToRoman(num) {
  
  var romans = ["M", "D", "C", "L", "X", "V", "I"];
  var rom = "";
  var level = 0;
  var res = num.toString();
  if (num < 10) {
	res = "000" + res;
  } else if (num > 9 && num < 100) {
	res = "00" + res;
  } else if (num > 99 && num < 1000) {
	res = "0" + res;
  }
  var rez;
  for (var i = 0; i < res.length; i++) {
	rez = parseInt(res[i]) % 5;
	var temp = repeat(romans[level], rez);
	if (res[i] === "9") {
		rom = rom + romans[level] + romans[level-2];
	} else if (parseInt(res[i]) > 4) {
		rom = rom + romans[level-1] + temp;
	} else if (res[i] === "4") {
		rom = rom + romans[level] + romans[level-1];
	} else {
		rom = rom + temp;
	}
	level = level + 2;
  }
  return rom;
}

// test > node romans.js

console.log(convertToRoman(36));