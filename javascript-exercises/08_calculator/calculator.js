const add = function(value1, value2) {
	const added = value1 + value2;
  return added;
};

const subtract = function(main, sub) {
	return main - sub;
};

const sum = function(arr) {
  if(arr.length!=0) return arr.reduce((acc, num)=> acc + num)
    else return 0;	
};

const multiply = function(arr) {
  return arr.reduce((acc, num)=> acc*num)
};

const power = function(num, exp) {
  let pow = num;
	for(i=0;i<exp-1;i++) num*=pow;
  return num;
};

const factorial = function(num) {
  let multiple = 1;
  for(i=1;i<num+1;i++) 	multiple *= i;
  return multiple;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
