// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, 
// the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```

// function longest(s1, s2) {
//   let uniqueCharStr = '';
//   for (let char = 0; char < s1.length; char++) {
//     if (uniqueCharStr.indexOf(s1[char]) === -1) {
//       uniqueCharStr = uniqueCharStr.concat(s1[char]);
//     }
//   }

//   for (let char = 0; char < s2.length; char++) {
//     if (uniqueCharStr.indexOf(s2[char]) === -1) {
//       uniqueCharStr = uniqueCharStr.concat(s2[char]);
//     }
//   }

//   let res = '';
//   uniqueCharStr.split('').sort().forEach(element => {
//     res = res.concat(element);
//   });

//   return res;
// }

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('');

const a = "xyaabbbccccdefww";
const b = "xxxxyyyyabklmopq";
console.log(longest(a, b));