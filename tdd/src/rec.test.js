import { sumAll } from "./rec.js";
import { factorial } from "./rec.js";
import { fibonacci } from "./rec.js";
import { printList } from "./rec.js";
import { collatz } from "./rec.js";

describe("sumAll", () => {
    test("returns 0 for input 0", () => {
        expect(sumAll(0)).toBe(0);
    });
    test("returns 1 for input 1", () => {
        expect(sumAll(1)).toBe(1);
    });
    test("returns 10 for input 4", () => {
        expect(sumAll(4)).toBe(10);
    });
    test("returns Undefined for negative input", () => {
        expect(sumAll(-1)).toBeUndefined();
    });
    test("returns Undefined for non-integer input", () => {
        expect(sumAll(1.5)).toBeUndefined();
    });
    test("returns Undefined for non-number input", () => {
        expect(sumAll("5")).toBeUndefined();
    });
});

describe("factorial", () => {
    test("returns 1 for input 0", () => {
        expect(factorial(0)).toBe(1);
    });
    test("returns 1 for input 1", () => {
        expect(factorial(1)).toBe(1);
    });
    test("returns 120 for input 5", () => {
        expect(factorial(5)).toBe(120);
    });
    test("returns Undefined for negative input", () => {
        expect(factorial(-1)).toBeUndefined();
    });
    test("returns Undefined for non-integer input", () => {
        expect(factorial(1.5)).toBeUndefined();
    });
    test("returns Undefined for non-number input", () => {
        expect(factorial("5")).toBeUndefined();
    });
})

describe("fibonacci", () => {
    test("returns 0 for input 0", () => {
        expect(fibonacci(0)).toBe(0);
    });
    test("returns 1 for input 1", () => {
        expect(fibonacci(1)).toBe(1);
    });
    test("returns 1 for input 2", () => {
        expect(fibonacci(2)).toBe(1);
    });
    test("returns 2 for input 3", () => {
        expect(fibonacci(3)).toBe(2);
    });
    test("returns 3 for input 4", () => {
        expect(fibonacci(4)).toBe(3);
    });
    test("returns undefined for negative input", () => {
        expect(fibonacci(-1)).toBeUndefined();
    });
    test("returns undefined for non-integer input", () => {
        expect(fibonacci(1.5)).toBeUndefined();
    });
    test("returns undefined for non-number input", () => {
        expect(fibonacci("5")).toBeUndefined();
    });
});

describe("printList", () => {
    // Note: It's usually safer to define the spy inside a beforeAll
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => { });

    afterEach(() => {
        logSpy.mockClear();
    });

    afterAll(() => {
        logSpy.mockRestore();
    });

    test("logs value for single node linked list", () => {
        const linkedList = { value: 1, next: null };
        
        printList(linkedList); // Just call it, don't check a return value
        
        expect(logSpy).toHaveBeenCalledWith(1);
        expect(logSpy).toHaveBeenCalledTimes(1);
    });

    test("logs values for multiple node linked list", () => {
        const linkedList = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
        
        printList(linkedList);

        expect(logSpy).toHaveBeenCalledWith(1);
        expect(logSpy).toHaveBeenCalledWith(2);
        expect(logSpy).toHaveBeenCalledWith(3);
        expect(logSpy).toHaveBeenCalledTimes(3);
    });
});

describe("Collatz Conjecture", () => {
    test("returns 0 for input 1", () => {
        expect(collatz(1)).toBe(0);
    });
    test("returns 1 for input 2", () => {
        expect(collatz(2)).toBe(1);
    });
    test("returns 7 for input 3", () => {
        expect(collatz(3)).toBe(7);
    });
    test("returns 24 for input 50", () => {
        expect(collatz(50)).toBe(24);
    });
})