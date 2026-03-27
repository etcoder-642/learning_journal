const removeFromArray = function(arr, ...rem) {
    let array = [];
    for (const arrs of arr){
        (!(rem.includes(arrs))) ? array.push(arrs): array.push();
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
