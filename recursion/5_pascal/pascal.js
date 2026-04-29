const pascal = function(num) {
  if(num == 1) return [1];
  let universe = pascal(num-1);
  let res = [1];
  for(let i = 0; i < universe.length-1;i++){
    res.push(universe[i]+universe[i+1]);
  }
  res.push(1);
  return res;
};

console.dir(pascal(8), { depth: null });
  
// Do not edit below this line
module.exports = pascal;
