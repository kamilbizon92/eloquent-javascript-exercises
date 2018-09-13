/* Exercise 3 from chapter 4 - A list

Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

*/

function arrayToList(x) {
  let list = {};
  // Backward iteration for creating a list
  for (let i = x.length-1; i >= 0; i--) {
    let rest_value;
    if (i == x.length-1) {
      rest_value = null;
    } else {
      rest_value = list;
    }

    list = {
      value: x[i],
      rest: rest_value
    }
  }
  return list;
}

function listToArray(x) {
  let array = [];
  // Looping through values of subsequent node rest
  for (let node = x; node; node = node.rest) {
    // Prevent from add 'undefined' to array when value of node does not exist
    if (node.value) {
      array.push(node.value);
    }
  }
  return array;
}

function prepend(val, rest) {
  let list = rest;
  list = {
    value: val,
    rest: rest
  }
  return list;
}

function nth(list, position) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    if (node.value) {
      array.push(node.value);
    }
    if (array.length-1 == position) {
      return array[position];
    }
  }
  
}

/* This solution of function nth take less line of code, but is slower (contain all elements from array, does not stop after chosen position)

function nth(list, position) {
  return listToArray(list)[position];
}
*/

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20])));
// → [10, 20]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20