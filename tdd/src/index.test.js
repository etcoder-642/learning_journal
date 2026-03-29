import { capitalize } from "./index.js";
import { reverseString } from "./index.js";
import { calculator } from "./index.js";
import { ceasarCipher } from "./index.js";
import { analyzeArray } from "./index.js";

describe("capitalize", () => {
    test("capitalizes the first letter of 'hello'", () => {
        expect(capitalize("hello")).toBe("Hello");
    });
    test("returns 'TEST' unchanged", () => {
        expect(capitalize("TEST")).toBe("TEST");
    });
    test("returns empty string for empty input", () => {
        expect(capitalize("")).toBe("");
    });
    test("capitalizes single letter 'a'", () => {
        expect(capitalize("a")).toBe("A");
    });
});

describe("reverseString", () => {
    test("reverses 'hello'", () => {
        expect(reverseString("hello")).toBe("olleh");
    });
    test("reverses 'TEST'", () => {
        expect(reverseString("TEST")).toBe("TSET");
    });
    test("returns empty string for empty input", () => {
        expect(reverseString("")).toBe("");
    });
    test("returns 'a' for single character input", () => {
        expect(reverseString("a")).toBe("a");
    });
});

describe("calculator", () => {
    test("adds 2 + 3 to equal 5", () => {
        expect(calculator().add(2, 3)).toBe(5);
    });
    test("subtracts 5 - 2 to equal 3", () => {
        expect(calculator().subtract(5, 2)).toBe(3);
    });
    test("multiplies 2 * 3 to equal 6", () => {
        expect(calculator().multiply(2, 3)).toBe(6);
    });
    test("divides 6 / 2 to equal 3", () => {
        expect(calculator().divide(6, 2)).toBe(3);
    });
});

describe("ceasarCipher", () => {
    test("shifts 'hello' by 1 to 'ifmmp'", () => {
        expect(ceasarCipher("hello", 1)).toBe("ifmmp");
    });
    test("shifts 'xyz' by 3 to 'abc'", () => {
        expect(ceasarCipher("xyz", 3)).toBe("abc");
    });
    test("shifts 'hElLo' by 5 to 'mJqQt'", () => {
        expect(ceasarCipher("hElLo", 5)).toBe("mJqQt");
    });
    test("shifts 'abc' by 0 to 'abc'", () => {
        expect(ceasarCipher("abc", 0)).toBe("abc");
    });
    test("shifts 'abc' by 26 to 'abc'", () => {
        expect(ceasarCipher("abc", 26)).toBe("abc");
    });
    test("shifts empty string by 5 to ''", () => {
        expect(ceasarCipher("", 5)).toBe("");
    });
});

describe("analyzeArray", () => {
    test("analyzes [1,2,3,4,5]", () => {
        expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
            average: 3,
            min: 1,
            max: 5,
            length: 5
        });
    });
    test("analyzes [5,5,5,5]", () => {
        expect(analyzeArray([5, 5, 5, 5])).toEqual({
            average: 5,
            min: 5,
            max: 5,
            length: 4
        });
    });
    test("analyzes [] (empty array)", () => {
        expect(analyzeArray([])).toEqual({
            average: null,
            min: null,
            max: null,
            length: 0
        });
    });
});