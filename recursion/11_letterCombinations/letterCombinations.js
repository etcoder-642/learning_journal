function letterCombinations(input) {
  // 1. Base Case: If the input is empty
  if (input.length === 0) return [];

  // 2. Base Case: If there is only one array left, 
  // this is the "bottom" of our recursion.
  if (input.length === 1) return input[0];

  const result = [];
  const firstArray = input[0];
  
  // 3. Recursive Call: Get all combinations for everything AFTER the first array
  const remainingCombinations = letterCombinations(input.slice(1));

  // 4. Combine current choices with the results from the "future"
  for (const word of firstArray) {
    for (const combination of remainingCombinations) {
      result.push(`${word} ${combination}`);
    }
  }

  return result;
}


const input2 = [['a', 'b'], ['c']];
// ['a c', 'b c']

const input = [['small', 'big'], ['red', 'blue'], ['car', 'bike']];
const output = [
    'small red car',
    'small red bike',
    'small blue car',
    'small blue bike',
    'big red car',
    'big red bike',
    'big blue car',
    'big blue bike'
];


console.log("Starting Debug...");
const results = letterCombinations(input);
console.log("Final Results:", results);


module.exports = letterCombinations;