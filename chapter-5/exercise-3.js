/* Exercise 3 from chapter 5 - Everything

Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

*/

// First solution
function every(array, test) {
  for (let i = 0; i < array.length; i++) {
      if (!test(array[i])) {
          return false
      }
  }
  return true;
}

// Second solution, using some method
/*
function every(array) {
  // Negation of disjunction of negations (some) is equal to conjunction
  return !array.some(n => n >= 10)
}
*/

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true