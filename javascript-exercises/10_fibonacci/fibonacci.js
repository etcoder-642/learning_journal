const fibonacci = function(num) {  
    // first check for the positiveness of the num
    // we can have a main variable main
    let a = 0;
    let b = 1;
    let c = 0;
    if(num<0) return "OOPS"
    for(i=0;i<parseInt(num);i++){
        c = a + b;
        a = b;
        b = c;
    }
    return a;
    
};


// Do not edit below this line
module.exports = fibonacci;
