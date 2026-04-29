const mergeSort = function (arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);

    let u1 = arr.slice(0, mid);
    let u2 = arr.slice(mid);
    let fsorted = [];
    if (u1.length > 1) {
        u1 = mergeSort(u1);
    } 
    if (u2.length > 1) {
        u2 = mergeSort(u2);
    }
    let n = u1.length+u2.length;
    for(let i = 0; i < n; i++){
        if(u1.length == 0) u1.push(Infinity);
        if(u2.length == 0) u2.push(Infinity);
        if(u1[0] > u2[0]){
            fsorted.push(u2[0]);
            u2 = u2.slice(1);
        }else {
            fsorted.push(u1[0]);
            u1 = u1.slice(1);
        }
    }
    return fsorted;
}
// [2,0,3,4,1]
console.log(mergeSort([5,0,19,96,-4,3,10,1,4]));
console.log(mergeSort([5]));