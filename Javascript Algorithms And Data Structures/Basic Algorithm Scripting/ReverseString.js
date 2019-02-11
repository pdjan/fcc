
function reverseString(str) {

  let res = str.split('');
  res.reverse();
  str = res.join('');
  return str;
}
reverseString("hello");
// console.log(reverseString("hello"));