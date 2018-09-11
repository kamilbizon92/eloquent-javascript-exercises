/* Exercise 2 from chapter 2 - FizzBuzz

  Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

  When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

*/

//  First solution, checking if number is divisible by 3 or 5 or (3 and 5)
(() => {
  for (let i = 1; i <= 100; i++) {
    if (i%3 == 0) {
      if (i%5 == 0) console.log('FizzBuzz');
      else console.log('Fizz');
    } else if (i%5 == 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
})();

//  Second solution, adding proper word when number is divisible by 3 or 5
(() => {
  for (let i = 1; i <= 100; i++) {
    let word = '';
    if (i%3 == 0) word += 'Fizz';
    if (i%5 == 0) word += 'Buzz';
    if (word) console.log(word);
    else console.log(i);
    word = '';
  }
})();