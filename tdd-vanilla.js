// Write a program to return the number of vowels in a string.
// e.g. returns 5 for 'aeiou' and "lighthouse labs" and 0 for 'shh'

// declare a var to sotre the count of vowels
// declared a const to store the vowels
// loop through the str
const countVowels = function (str) {
  let count = 0;
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  for (const char of str) {
    if (VOWELS.includes(char)) {
      count += 1;
    }
  }

  return count;
}

module.exports = countVowels;

// module.exports = {
//   countVowels: countVowels
// }