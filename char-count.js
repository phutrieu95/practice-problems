// Create a function that takes two strings as arguments and returns the number of
// times the first string(the single character) is found in the second string.

//   Examples
// charCount("a", "edabit") ➞ 1

// charCount("c", "Chamber of secrets") ➞ 1

// charCount("b", "big fat bubble") ➞ 4
// Notes
// Your output must be case -sensitive(see second example).

const charCount = (myChar, str) => {
  const re = new RegExp(myChar, "g");
  return (str.match(re) ? str.match(re).length : 0);
}

console.log(charCount('a', 'banana'));
