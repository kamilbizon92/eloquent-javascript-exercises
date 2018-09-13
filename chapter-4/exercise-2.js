/* Exercise 2 from chapter 4 - Reversing an array

Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

*/

// First solution, backward iteration
function reverseArray1(x) {
  let reverse = [];
  for (let i = x.length-1; i >= 0; i--) {
    reverse.push(x[i]);
  }
  return reverse;
}

console.log(reverseArray1(["A", "B", "C"]));
// → ["C", "B", "A"]

// Second solution, pop() and push()
function reverseArray2(x) {
  let reverse = [];
  const array_length = x.length;
  for (let i = 0; i < array_length; i++) {
    reverse.push(x.pop());
  }
  return reverse;
}

console.log(reverseArray2(["D", "E", "F"]));
// → ["F", "E", "D"]


// Reversing array in a place without creating copy of the array
let arrayValue = [1, 2, 3, 4, 5];
function reverseArrayInPlace(x) {
  // There is no reason to looping through all elements from array, only half is required
  let array_length = Math.floor(arrayValue.length/2);
  // Helpful variable which store the value of 'i' element from array before change
  let help_var;
  for (let i = 0; i < array_length; i++) {
    // x[i] - this is 'i' element of array
    // x[x.length-1-i] - this is 'i' element from the end of array
    help_var = x[i];
    x[i] = x[x.length-1-i];
    x[x.length-1-i] = help_var;
  }
  return x;
}

reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]