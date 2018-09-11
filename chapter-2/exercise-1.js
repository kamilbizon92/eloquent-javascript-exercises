/* Exercise 1 from chapter 2 - Looping a triangle

  Write a loop that makes seven calls to console.log to output the following triangle:

  #
  ##
  ###
  ####
  #####
  ######
  #######

*/

// First solution (seven calls of console.log())
((x = 7) => {
  if (x < 0) {
    console.log('Choose something greater than zero');
  } else {
    for (let i=1; i<=x; i++) {
      console.log('#'.repeat(i));
    }
  }
})(7);

// Second solution (one call of console.log())
((x = 7) => {
  if (x < 0) {
    console.log('Choose something greater than zero');
  } else {
    let triangle = '';
    for (let i=1; i<=x; i++) {
      // Use second loop for adding correct amount of '#'
      for (let j=0; j<i; j++) {
        triangle += '#';
      }
      if (i<x) {
        triangle += "\n";
      }
    }
    console.log(triangle);
    return triangle;
  }
})(7);

// Third solution (one call of console.log() + repeat())
((x =7) => {
  if (x < 0) {
    console.log('Choose something greater than zero');
  } else {
    let triangle = '';
    for (let i=1; i<=x; i++) {
      // Use repeat for printing '#' instead additional loop
      triangle += '#'.repeat(i);
      if (i<x) {
        triangle += "\n";
      }
    }
    console.log(triangle);
    return triangle;
  }
})(7);