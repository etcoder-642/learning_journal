import { capitalize } from "./index.js";
import { reverseString } from "./index.js";
import { calculator } from "./index.js";
import { ceasarCipher } from "./index.js";
import { analyzeArray } from "./index.js";

test("Capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("TEST")).toBe("TEST");
    expect(capitalize("")).toBe("");
    expect(capitalize("a")).toBe("A");
})

test("reversing string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("TEST")).toBe("TSET");
    expect(reverseString("")).toBe("");
    expect(reverseString("a")).toBe("a");
})

test("calculator", () => {
    expect(calculator().add(2, 3)).toBe(5);
    expect(calculator().subtract(5, 2)).toBe(3);
    expect(calculator().multiply(2, 3)).toBe(6);
    expect(calculator().divide(6, 2)).toBe(3);
})

test("ceasarCipher", () => {
    expect(ceasarCipher("hello", 1)).toBe("ifmmp");
    expect(ceasarCipher("xyz", 3)).toBe("abc");
    expect(ceasarCipher("hElLo", 5)).toBe("mJqQt");
    expect(ceasarCipher("abc", 0)).toBe("abc");
    expect(ceasarCipher("abc", 26)).toBe("abc");
    expect(ceasarCipher("", 5)).toBe("");
})

test("analyze Array", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    });
    expect(analyzeArray([5, 5, 5, 5])).toEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 4
    });
    expect(analyzeArray([])).toEqual({
        average: null,
        min: null,
        max: null,
        length: 0
    });
})