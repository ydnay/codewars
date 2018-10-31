// In this little assignment you are given a string of space separated numbers, and have to return the highest 
// and lowest number.

const HighAndLow = function(str) {
  const numbers = str.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

console.log(HighAndLow("1 2 3 4 5")); // return "5 1"
console.log(HighAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(HighAndLow("1 9 3 4 -5")); // return "9 -5"