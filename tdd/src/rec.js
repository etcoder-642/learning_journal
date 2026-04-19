

export function sumAll(num) {
    if(!Number.isInteger(num) || num < 0) return undefined;
    if(num == 1 || num == 0){
        return num;
    }else {
        return num + sumAll(num - 1);
    }
}

export function factorial(num) {
    if(!Number.isInteger(num) || num < 0) return undefined;
    if(num == 1 || num == 0){
        return 1;
    }else {
        return num * factorial(num -1);
    }

}

export function fibonacci(n) {
    if(!Number.isInteger(n) || n < 0) return undefined;
    if(n == 0 || n == 1){
        return n;
    }else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

export function printList(obj) {
    if(obj.next == null){
        console.log(obj.value);
    } else {
        console.log(obj.value);
        printList(obj.next);
    }
}

export function collatz(num, res = 0) {
    if(num == 1 || num == 0){
        return res;
    }else if(num%2 == 0){
        return collatz(num/2, res+1);
    }else if(num%2 == 1){
        return collatz(3*num+1, res+1);
    }
}