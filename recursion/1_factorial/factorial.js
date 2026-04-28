 const factorial = function(num) {
    if(num < 0 || !Number.isInteger(num)){
        return undefined;
    }
    if(num == 0){
        return 1;
    }else {
        return num*factorial(num-1);
    }
};

// Do not edit below this line
module.exports = factorial;