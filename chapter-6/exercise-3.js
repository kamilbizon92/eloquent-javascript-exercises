/* Exercise 3 from chapter 6 - Iterable groups

Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.

*/

class Group {
  constructor() {
    this.group = [];
  }

  add(value) {
    // If value doesn't exists in array, push into
    if (this.group.indexOf(value) === -1) {
      this.group.push(value);
    }
  }

  delete(value) {
    // If element exists in array, it has indexOf different from -1
    if (this.group.indexOf(value) !== -1) {
      // Overwrite group array, when element was deleted
      return this.group = this.group.filter(n => {
        if (n != value) {
          return this.group.push(n)
        }
      });
    }
  }

  has(value) {
    if (this.group.indexOf(value) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  static from(array) {
    let newGroup = new Group();
    for (let i = 0; i < array.length; i++) {
      newGroup.add(array[i]);
    }
    return newGroup;
  }
}

class GroupIterator {
  constructor(group) {
    this.x = 0;
    this.group = group;
  }

  next() {
    if (this.x === this.group.group.length) {
      return { done: true };
    }
    let value = this.group.group[this.x]
    this.x++;
    return { value, done: false }
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
}

let group = Group.from(["a", "b", "c"]);
for (let value of group) {
  console.log(value);
}

// → a
// → b
// → c