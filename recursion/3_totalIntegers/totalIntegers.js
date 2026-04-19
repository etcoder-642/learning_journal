const totalIntegers = function (val) {
    // 1. Initial Check: If the very first input is not a collection, return undefined
    const isObject = Object.prototype.toString.call(val) === "[object Object]";
    const isArray = Array.isArray(val);
    
    if (!isObject && !isArray) {
        return undefined;
    }

    // 2. Helper function to handle the recursive counting
    function countRecursive(item) {
        // Base case: it's an integer
        if (Number.isInteger(item)) {
            return 1;
        }
        
        // Recursive case: it's a container (Object or Array)
        if (Array.isArray(item) || Object.prototype.toString.call(item) === "[object Object]") {
            let sum = 0;
            let values = Object.values(item);
            
            for (let i = 0; i < values.length; i++) {
                sum += countRecursive(values[i]);
            }
            return sum;
        }
        
        // Final case: it's a value we don't count (strings, NaN, etc.)
        return 0; 
    }

    // Start the recursive process
    return countRecursive(val);
};

// Do not edit below this line
module.exports = totalIntegers;