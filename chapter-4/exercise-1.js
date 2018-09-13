/* Exercise 1 from chapter 4 - The sum of a range

Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

*/

function range(x, y, z = 1) {
  // Validation needed to avoid infinite loop
  if (((x > y) && (z > 0)) || ((x < y) && (z < 0))) {
    return 'Infinite loop, you cannot do that!';
  } else {
    let numbers = [];
    if (z != 0) {
      if (x > y) {
        for (let i = x; i >= y; i += z) {
          numbers.push(i);
        }
      } else {
        for (let i = x; i <= y; i += z) {
          numbers.push(i);
        }
      }
    } else {
     // Step cannot be equal 0
      return "You cannot do that!";
    }
    return numbers;
  }
}


function sum(x) {
  let sum = 0;
  if (x[x.length-1] > x[0]) {
    for (let i = x[0]; i <= x.length; i++) {
      sum += i;
    }
    return sum;
  } else if (x[x.length-1] < x[0]) {
    for (let i = x[0]; i >= x[x.length-1]; i--) {
      sum += i;
    }
    return sum;
  } else {
    // First and last numbers are the same, so sum of that range is equal to first value
    return x[0];
  }
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(10, 1));
// → Infinite loop, you cannot do that
console.log(range(1, 10, -2));
// → Infinite loop, you cannot do that
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(range(5, 2, 0));
// → You cannot do that!
console.log(range(51, 2, -3));
// → [51, 48, 45, 42, 39, 36, 33, 30, 27, 24, 21, 18, 15, 12, 9, 6, 3]
console.log(range(3, 17, 4));
// → [3, 7, 11, 15]
console.log(sum(range(1, 10)));
// → 55
console.log(sum(range(10, 1, -1)));
// → 55
console.log(sum(range(10, 10)));
// → 10