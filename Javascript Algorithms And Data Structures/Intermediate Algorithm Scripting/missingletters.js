function fearNotLetter(str) {

  let counter = 0;

  while ( counter < (str.length - 1) ) {

    if ( str.charCodeAt(counter + 1) - str.charCodeAt(counter) > 1 ) {
		return String.fromCharCode(str.charCodeAt(counter) + 1);
	}
	counter++;
  }
}

// test > node missingletters.js

console.log(fearNotLetter("abce"));