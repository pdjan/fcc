function pairElement(str) {
  var helix = {"G":"C", "C":"G", "A":"T", "T":"A"};
  return str.split("").map( (item) => [item, helix[item]]);
}

// test > node dna.js
console.log(pairElement("GCG"));