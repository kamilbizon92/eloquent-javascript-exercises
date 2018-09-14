/* Ecercise 4 from chapter 5 - Dominant writing direction

Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

The dominant direction is the direction of a majority of the characters that have a script associated with them. The characterScript and countBy functions defined earlier in the chapter are probably useful here.

*/

// Script file from eloquentjavascript.net
const SCRIPTS = require('./scripts');

function characterScript(code) {
  for (let script of SCRIPTS) {
    // Check which direction corresponds to 'code'
    if (script.ranges.some(([from, to]) => {
      return code >= from && code <= to;
    })) {
      return script.direction;
    }
  }
  return null;
}

function dominantDirection(text) {
  let count = [];
  // Loop through all characters to get all directions
  for (let letter of text) {
    // Get direction of character
    let characterDirection = characterScript(letter.codePointAt(0));
    // Check if direction (ltr/rtl/ttb) exists in count array
    let isInDirectionArray = count.findIndex(c => c.direction == characterDirection);
    // If doesn't exist, create object, if exist just add +1
    if (isInDirectionArray == -1) {
      count.push({ direction: characterDirection, count: 1} );
    } else {
      count[isInDirectionArray].count++;
    }
  }

  let num = 0;
  let dominant = '';
  let count_array = [];
  // Filter null (which produce i.e: 'space') and get dominant direction
  count.filter(n => n.direction != null).forEach(c => {
    if (c.count >= num) {
      dominant = c.direction;
      num = c.count;
      count_array.push(c.count);
    }
  });
  // Check if last two elements of array are equal
  if (count_array[count_array.length-1] === count_array[count_array.length-2]) {
    return 'There is no dominant direction!';
  } else {
    return dominant;
  }
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
console.log(dominantDirection("Hello world, مسساء ,الخير"));
// → There is no dominant direction!