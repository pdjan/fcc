function rot13(str) { // LBH QVQ VG!
  var output = '';
  var dif, diff;
  
  for (var i = 0; i < str.length; i++) {
    dif = str.charCodeAt(i) - 13;
    
    if ((dif) > 64 && (dif) < 91) {
      output += String.fromCharCode(dif); 
    } else if ((dif > 51) && (dif < 65)) {
	  diff = 91 - (65 - dif);
      output += String.fromCharCode(diff);
    } else {
	  output += str[i];
	}
  }
  return output;
}

// test > node caesars.js

console.log(rot13("SERR PBQR PNZC"));