/* Exercise 1 from chapter 20 - Search tool

On Unix systems, there is a command line tool called grep that can be used to quickly search files for a regular expression.

Write a Node script that can be run from the command line and acts somewhat like grep. It treats its first command line argument as a regular expression and treats any further arguments as files to search. It should output the names of any file whose content matches the regular expression.

When that works, extend it so that when one of the arguments is a directory, it searches through all files in that directory and its subdirectories.

Use asynchronous or synchronous file system functions as you see fit. Setting things up so that multiple asynchronous actions are requested at the same time might speed things up a little, but not a huge amount, since most file systems can read only one thing at a time.

*/

const { statSync, readFileSync, readdirSync } = require('fs');
let regexp = new RegExp(process.argv[2]);
let args = process.argv.slice(3);

for (let i=0; i<args.length; i++) {
  search(args[i]);
}

function search(file) {
  let stats = statSync(file);

  if (stats.isDirectory()) {
    let subdirectories = readdirSync(file);
    // Recursive call function for subdirectories
    for (let i=0; i<subdirectories.length; i++) {
      search(`${file}/${subdirectories[i]}`);
    }
  } else if (readFileSync(file).toString().match(regexp)) {
    console.log(`File ${file} contain word ${regexp}`);
  }
}