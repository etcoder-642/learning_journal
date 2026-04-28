const totalIntegers = function (val) {
    if(!(typeof val == 'object' && val != null)) return undefined;
    let arr = Object.values(val);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'object' && arr[i] != null) {
            count += totalIntegers(arr[i]);
        }else{
            if(Number.isInteger(arr[i])){
                count++;
            }
        }
    }
    return count;
}

// Do not edit below this line
module.exports = totalIntegers;