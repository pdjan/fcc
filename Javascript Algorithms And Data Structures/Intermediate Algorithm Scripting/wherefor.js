function whatIsInAName(collection, source) {

  var arr = [];

  var prop = Object.keys(source);
  var key = [];
  var track;
  
  for (var c = 0; c < prop.length; c++) {
	key.push(source[prop[c]]);
  }
  
  for (var i = 0; i < collection.length; i++) {
    track = false;
    for (var j = 0; j < prop.length; j++) {

		if (collection[i].hasOwnProperty(prop[j]) && (collection[i][prop[j]] === key[j])) {
			track = true;
		} else {
			track = false;
			break;
		}
	}
	if (track) {
		arr.push(collection[i]);
	}
  }
  
  return arr;
}

// test > node wherefor.js
// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "b": 2 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));