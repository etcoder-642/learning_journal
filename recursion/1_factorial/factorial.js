const factorial = function(num) {
        if(!Number.isInteger(num) || num < 0) return undefined;
    if(num == 1 || num == 0){
        return 1;
    }else {
        return num * factorial(num -1);
    }

};

// Do not edit below this line
module.exports = factorial;