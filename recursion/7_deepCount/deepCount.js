const deepCount = function(val, rnBool = true) {
    let counter = 0;
    if(typeof val === 'object' && val !== null){
        if(rnBool) rnBool = !rnBool;
        else counter++;
        const arr = Object.values(val);
        for(let i = 0; i < arr.length; i++){
            counter += deepCount(arr[i], rnBool);
        }
    }else{
        counter++;
    }
    return counter;
};

// Do not edit below this line
module.exports = deepCount;