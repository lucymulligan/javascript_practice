const { sumMultiples } = require("../challenges/week9");

describe("sumMultiples", () => {
    test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);

    });
});





 //isValidDNA,
    //getComplementaryDNA,
    //isItPrime,
    //createMatrix,
    //areWeCovered