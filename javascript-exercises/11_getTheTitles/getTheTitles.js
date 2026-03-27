const getTheTitles = function(arr) {
    let ans = []
    for(i=0;i<arr.length;i++){
        ans.push(arr[i].title)
    }
    return ans;
};

// Do not edit below this line
module.exports = getTheTitles;
