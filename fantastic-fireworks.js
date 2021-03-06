// Create a function that accepts a number and returns a string variation of the
// word "Boom".The string should include n number of "o"s, unless n is less than 2.
// If that is the case, return "boom").If n is evenly divisible by 2, add an
// exclamation point at the end of the string.If n is evenly divisible by 5, return
// the string in all CAPS.If n is evenly divisible by both 2 and 5, return the
// string in ALL CAPS and add an exclamation point to the end of the string.

const fantasticFireworks = num => {
  if (num < 2) return 'boom';
  const arr = ['B', 'm'];
  arr.splice(1, 0, 'o'.repeat(num));
  let boom = arr.join('');
  if (num % 2 === 0) {
    boom = boom + '!'
  }
  if (num % 5 === 0) {
    boom = boom.toUpperCase();
  }
  return boom;
}

console.log(fantasticFireworks(10));
