/* Exercise 1 from chapter 3 - Minimum

The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.

*/

function min(x, y) {
  if (x > y) {
    return y;
  } else if (x === y) {
    // Numbers are the same, return x or y
    return x;
  } else {
    return x;
  }
}

console.log(min(0, 10));
// → 0
console.log(min(2, 2));
// → 2
console.log(min(0, -10));
// → -10