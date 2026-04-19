// Write a function findValuesByKey(obj, targetKey) that returns an array of all values found under that key name.
const findPathByKey = function (obj, target) {
    let arr = Object.keys(obj);
    let masterArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof obj[arr[i]] == 'object' && obj[arr[i]] != null) {
            masterArr.push(...findPathByKey(obj[arr[i]], target));
            debugger;
        } else {
            if (arr[i] == target) {
                masterArr.push(obj[arr[i]]);
                debugger;
            }
        }
    }
    return masterArr;
}

// ADD THIS AT THE BOTTOM OF YOUR FILE:
  const data = {
    id: 1,
    info: { id: 2, label: "test" },
    items: [
      { id: 3, label: "inner" },
      { id: 4, children: [{ id: 5 }] }
    ]
  };

console.log("Starting Debug...");
const results = findPathByKey(data, 'id');
console.log("Final Results:", results);

module.exports = findPathByKey;