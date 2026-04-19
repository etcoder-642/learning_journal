    // const data = { 
    //   fin: { manager: 1000, staff: 500 }, 
    //   hr: 800 
    // };

const sumSalaries = function(data) {
    // your code here
    // if(Number.isInteger(data)) return 0;
    const arr = Object.values(data);
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(Object.prototype.toString.call(arr[i]) == "[object Object]"){
            sum += sumSalaries(arr[i]);
        }else if(Number.isInteger(arr[i])){
            sum += arr[i];
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumSalaries;