const deepCount = function(val) {
    let arr = Object.values(val);
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] == 'object' && arr[i] != null){
            count++;
            count += deepCount(arr[i]);
        }else{
            count++;
        }
    }
    return count;
}

// Do not edit below this line
module.exports = deepCount;