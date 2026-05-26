const mergeSort = function (arr) {
    // 1. BASE CASE: If the array has 0 or 1 item, it's already "sorted."
    // This stops the recursion from running forever.
    if (arr.length <= 1) return arr;

    // 2. DIVIDE: Find the middle point of the current array.
    let mid = Math.floor(arr.length / 2);

    // 3. SPLIT: Create two new arrays. 
    // u1 gets the left half, u2 gets the right half.
    let u1 = arr.slice(0, mid);
    let u2 = arr.slice(mid);
    let fsorted = []; // This will hold our final merged and sorted result.

    // 4. RECURSION: If the halves have more than 1 item, keep splitting them.
    // We call the same function inside itself until we reach the base case.
    if (u1.length > 1) {
        u1 = mergeSort(u1);
    } 
    if (u2.length > 1) {
        u2 = mergeSort(u2);
    }

    // 5. MERGE: Now we combine the two sorted halves back together.
    let n = u1.length + u2.length;
    for(let i = 0; i < n; i++){
        
        // SENTRY VALUES: If one side runs out of numbers, we add "Infinity."
        // This ensures the comparison (u1[0] > u2[0]) always works and 
        // the remaining numbers from the other side are picked.
        if(u1.length == 0) u1.push(Infinity);
        if(u2.length == 0) u2.push(Infinity);

        // COMPARISON: Look at the first (smallest) element of each half.
        if(u1[0] > u2[0]){
            // If the right side's number is smaller, pick it.
            fsorted.push(u2[0]);
            // Remove the picked number so we can look at the next one.
            u2 = u2.slice(1);
        } else {
            // If the left side's number is smaller (or equal), pick it.
            fsorted.push(u1[0]);
            // Remove the picked number.
            u1 = u1.slice(1);
        }
    }

    // 6. RETURN: Send the newly sorted combined array back up the stack.
    return fsorted;
}

console.log(mergeSort([5,0,19,96,-4,3,10,1,4,0]));
console.log(mergeSort([5]));