/* Exercise 3 from chapter 2 - Chessboard

  Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

  Passing this string to console.log should show something like this:

   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
  When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

*/

// Default value for chessboard is set to 8
((x = 8) => {
  if (x < 0) {
    console.log('Choose something greater than zero');
  } else {
    let board = "";
    // Boolean for printing ' ' and '#' alternately
    let bool = true;
    for (let i = 0; i < x; i++){
      for (let j = 0; j < x; j++) {
        if (bool == true) {
          board += " ";
          bool = false;
        }
        else {
          board += "#";
          bool = true;
        }
      }
      // Change only for even numbers, because odd without this create natural board with alternately values of ' ' and '#'
      if (x%2 == 0) {
        bool = !bool;
      }
      // End of line
      board += "\n";
    }
    console.log(board);
    return board;
  }
// Size can be defined in a line below, type any number instead of '8'
})(8);