const letterCombinations = function(input) {
  // BASE CASE: If there are no more arrays to combine, 
  // we return an array with an empty string (the "seed" for our combinations).
  if (input.length === 0) {
    return [""];
  }

  const firstArray = input[0];
  const restOfArrays = input.slice(1);

  // 1. RECURSIVE STEP: Get all combinations of everything AFTER the first array
  debugger;
  const combinationsOfRest = letterCombinations(restOfArrays);

  let masterArr = [];

  // 2. COMBINATION STEP: For every option in my current array...
  for (let option of firstArray) {
    debugger;
    // ...attach it to every combination that came back from the recursive call
    for (let combination of combinationsOfRest) {
      masterArr.push((option + " " + combination).trim());
      debugger;
    }
  }

  return masterArr;
};


const input2 = [['a', 'b'], ['c']];
// ['a c', 'b c']

const input = [['small', 'big'], ['red'], ['car', 'bike']];
const output = [
    'small red car',
    'small red bike',
    'big red car',
    'big red bike'
];


console.log("Starting Debug...");
const results = letterCombinations(input2);
console.log("Final Results:", results);


module.exports = letterCombinations;