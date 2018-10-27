// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  return s.split(' ').sort((a, b) => {
    return a.length < b.length ? -1 : 1;
  })[0].length;
}

function findShort1(s) {
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

const str = 'String will never be empty and you do not need to account for different data types.';
console.log(findShort(str));
console.log(findShort1(str));