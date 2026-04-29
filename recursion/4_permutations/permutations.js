const permutations = function (arr) {
    if (arr.length == 0) return [[]];
    let main = [];
    for (let i = 0; i < arr.length; i++) {
        main.push(...
            permutations([...arr.slice(0, i), ...arr.slice(i + 1)])
            .map((item) => [arr[i], ...item])
        );
    }
    return main;
};

console.dir(permutations([1, 2]), { depth: null });

// Do not edit below this line
module.exports = permutations;
