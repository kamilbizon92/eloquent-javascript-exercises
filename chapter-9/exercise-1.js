/* Exercise 1 from chapter 9 - Regexp golf

Code golf is a term used for the game of trying to express a particular program in as few characters as possible. Similarly, regexp golf is the practice of writing as tiny a regular expression as possible to match a given pattern, and only that pattern.

For each of the following items, write a regular expression to test whether any of the given substrings occur in a string. The regular expression should match only strings containing one of the substrings described. Do not worry about word boundaries unless explicitly mentioned. When your expression works, see whether you can make it any smaller.

*/

// car and cat
verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"]);

// pop and prop
verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]);

// ferret, ferry, and ferrari
verify(/ferr(et|y|ari)/, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"]);

// Any word ending in ious
verify(/\b.*ious\b/, ["how delicious", "spacious room"], ["ruinous", "consciousness"]);

// A whitespace character followed by a period, comma, colon, or semicolon
verify(/\s[,.;:]/, ["bad punctuation ."], ["escape the period"]);

// A word longer than six letters
verify(/\w{7}/, ["hottentottententen"], ["no", "hotten totten tenten"]);

// A word without the letter e (or E)
verify(/\b[^\se]+\b/i, ["red platypus", "wobbling nest"], ["earth bed", "learning ape", "BEET"]);

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}