// This time we want to write calculations using functions and get the results.
// Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

//  Requeriments:
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: 
// plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division,
// e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...

// const sum = function(num) {
//   return 2;
// }

// const one = function(f) {
//   if (f) {
//     return 1 
//   }
// }

// const two = function(f) {
//   return f + 0;
// }

console.log(zero(sum()));