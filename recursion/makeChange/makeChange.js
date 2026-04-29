const makeChange = function (num) {
    if (num == 0) return [[]];

    let universe1 = makeChange(num - 1);
    let u1arr = universe1.map((item) => {
        return [1, ...item];
    })
    let u2arr = [];
    if (num - 5 >= 0) {
        let universe2 = makeChange(num - 5);
        u2arr = universe2.map((item) => {
            return [5, ...item];
        })
    }
    return [...u1arr, ...u2arr];
}

console.log(makeChange(10));

module.exports = makeChange;