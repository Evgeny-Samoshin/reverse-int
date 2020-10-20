
module.exports = function reverse (n) {
    let arr = n.toString().split('');
  while (arr[arr.length-1] === '0') {
    arr.pop();
  }
  arr.reverse();
  if (arr[arr.length-1] === '-') {
    arr.pop();
  }
  return +arr.join('')
}