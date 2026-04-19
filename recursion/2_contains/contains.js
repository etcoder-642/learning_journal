const contains = function(obj, val) {
    let arr = Object.values(obj);
    for(let i = 0; i < arr.length; i++){
        if(Object.prototype.toString.call(arr[i]) == "[object Object]"){
            if(contains(arr[i], val)) return true;
        }else {
            if(Number.isNaN(val) && Number.isNaN(arr[i])) return true;
            if(arr[i] === val) return true;
        }
    }
    return false;
};
  
// Do not edit below this line
module.exports = contains;
