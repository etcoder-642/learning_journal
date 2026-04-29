const multiClimb = function(num, arr){
    if(num == 0) return [[]];
    let main = [];
    for(let i = 0; i < arr.length; i++){
        if(num-arr[i] >= 0){
           let universe = multiClimb(num-arr[i], arr);
           let uarr = universe.map((item) => [arr[i], ...item]);
           main.push(...uarr);
        }
    }
    return main;
}

console.dir(multiClimb(6, [1,3,4,5]), {depth: null});

module.exports = multiClimb;