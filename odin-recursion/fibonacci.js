const fibs = function(num) {
    let res = [0,1];
    for(let i =0; i < num-2; i++){
        res.push(res[i]+res[i+1]);
    }
    return res;
};

const fibsRec = function(num) {
    if(num <= 0) return [];
    if(num == 1) return [0];
    if(num == 2) return [0,1];
    let arr = fibsRec(num-1);
    arr.push(arr[arr.length-2]+arr[arr.length-1]);
    return arr;
}

console.log(fibsRec(30));