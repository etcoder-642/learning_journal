const climbPaths = function (num) {
    if (num == 0) return [[]];

    let universe1 = climbPaths(num - 1);
    let u1arr = universe1.map((item) => {
        return [1, ...item];
    })
    let u2arr = [];
    if (num - 2 >= 0) {
        let universe2 = climbPaths(num - 2);
        u2arr = universe2.map((item) => {
            return [2, ...item];
        })
    }
    return [...u1arr, ...u2arr];
}

console.log(climbPaths(4));

module.exports = climbPaths;