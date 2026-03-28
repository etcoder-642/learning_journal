import { capitalize } from "./index.js";

test("Capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("TEST")).toBe("TEST");
    expect(capitalize("")).toBe("");
    expect(capitalize("a")).toBe("A");
})