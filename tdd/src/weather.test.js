import { getAdvice } from "./weather.js";


test("get Advice", () => {
    const mockService = {
        getTemperature: jest.fn(() => 30)
    }
    expect(getAdvice(mockService)).toBe("Enjoy your day");
})