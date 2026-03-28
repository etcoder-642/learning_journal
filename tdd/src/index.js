
export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}

export function calculator() {
    return {
        add: (a, b) => { return a + b; },
        subtract: (a, b) => { return a - b; },
        multiply: (a, b) => { return a * b; },
        divide: (a, b) => { return a / b; }
    };
}

export function ceasarCipher(str, shift) {
    let char;
    let res = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") { res += str[i]; continue; }
        char = str.charCodeAt(i);
        char += shift % 26;
        res += ((str.charCodeAt(i) <= 90 && char >= 90) ||
            (str.charCodeAt(i) <= 122 && char >= 122)) ?
            String.fromCharCode(char - 26) : String.fromCharCode(char);
    }
    return res;
}

export function analyzeArray(arr) {
    if(arr.length === 0) return {
        average: null,
        min: null,
        max: null,
        length: 0
    }
    function average(sample) {
        return sample.reduce((pre, cur) => { return pre + cur }, 0) / arr.length;
    }
    function min(sample) {
        let min = Infinity;
        for (let i = 0; i < sample.length; i++) {
            if (sample[i] < min) min = sample[i];
        }
        return min;
    }
    function max(sample) {
        let max = -Infinity;
        for (let i = 0; i < sample.length; i++) {
            if (sample[i] > max) max = sample[i];
        }
        return max;

    }
    return {
        average: average(arr),
        min: min(arr),
        max: max(arr),
        length: arr.length
    }
}