/* Exercise 4 from chapter 4 - Deep comparison

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

*/

let obj = {
  here: {
    is: "an"
  },
  object: 2
}

// Array to store 0 when key/value are different and 1 when are equals
let help_array = [];

function deepEqual(object1, object2) {
  if ((typeof object1 === "object") && (typeof object2 === "object")) {
    if ((object1 === null) || (object2 === null)) {
      // If at least one object is null, return false
      console.log('One of this is null!');
      help_array.push(0);
      return false;
    } else {
      if (object1 === object2) {
        // If this is the same object, return true
        console.log('This is one object!');
        return true;
      } else {
        if (Object.keys(object1).length !== Object.keys(object2).length) {
          // If objects have different amount of keys, return false
          console.log('Different amount of keys!');
          help_array.push(0);
          return false;
        } else {
          for (let i = 0; i < (Object.keys(object1).length); i++) {
            if (Object.keys(object1)[i] === Object.keys(object2)[i]) {
              if (typeof Object.values(object1)[i] === "object") {
                // If value of key is an object, call recursively function on this object
                deepEqual(Object.values(object1)[i], Object.values(object2)[i]);
              } else {
                if (Object.values(object1)[i] === Object.values(object2)[i]) {
                  // Keys and values are equal
                  // console.log('Keys and values are equal!')
                  help_array.push(1);
                } else {
                  // Keys equals, but values are different
                  console.log('Values are different!')
                  help_array.push(0);
                  return false;
                }
              }
            } else {
              // If names of properties are different
              console.log('Keys are different!')
              help_array.push(0);
              return false;
            }
          }
          // If before in any nested object was '0', then function return false
          for (let i = 0; i < help_array.length; i++) {
            if (help_array[i] === 0) {
              return false;
            }
          }
          return true;
        }
      }
    }
  } else {
    // If one of is not object, return false
    console.log('At least there is one not a object!')
    help_array.push(0);
    return false;
  }
}

// console.log(deepEqual(obj, obj));
// → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
// console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true