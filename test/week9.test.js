const { sumMultiples } = require("../challenges/week9");

describe("sumMultiples", () => {
    test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([1, 3, 5])).toBe(8);
    });

    test("the test still works with decimal numbers", () => {
        expect(sumMultiples([1.5, 3.5, 5, 5.2, 3, 2.47])).toBe(8);
    });

    test("returns zero if there are no multiples of 3 or 5", () => {
        expect(sumMultiples([1, 7, 11, 4])).toBe(0);
    });

    test("error message works", () => {
        expect(() => {
        sumMultiples();
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples("hello");
        }).toThrow("an array is required");
    
    });
});