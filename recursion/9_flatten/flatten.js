// [1, 2, 3]
//[1, [2, 3], 4]

const flatten = function (val) {
    let masterArr = [];
    let arr = Object.values(val);
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] == 'object' && arr[i] != null){
            masterArr.push(...flatten(arr[i]));
        }else{
            masterArr.push(arr[i]);
        }
    }
    return masterArr;
}

module.exports = flatten;