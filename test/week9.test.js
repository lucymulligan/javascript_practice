const { sumMultiples, areWeCovered, isItPrime, isValidDNA} = require("../challenges/week9");

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

describe("areWeCovered", () => {
    test("it returns false if there are no staff due on that day", () => {
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
        expect(areWeCovered([], "Sunday")).toBe(false);
    });

    test("returns false if there are staff, but less than 3", () => {
        const staff = [
            {name: "Lucy", rota: ["Monday", "Tuesday"]},
            {name: "Stephanie", rota: ["Tuesday", "Wednesday"]},
            {name: "Nathaniel", rota: ["Wednesday", "Thursday", "Friday"]},
            {name: "Jonathan", rota: ["Saturday", "Sunday"]}
        ];
        expect(areWeCovered(staff, "Friday")).toBe(false);
    });

    test("returns true if there are 3 or more staff due on that day", () => {
        const staff = [
            {name: "Lucy", rota: ["Monday", "Tuesday"]},
            {name: "Stephanie", rota: ["Monday", "Tuesday", "Wednesday"]},
            {name: "Nathaniel", rota: ["Wednesday", "Thursday", "Friday"]},
            {name: "Jonathan", rota: ["Monday", "Saturday", "Sunday"]}
        ];
        expect(areWeCovered(staff, "Friday")).toBe(false);
    });

    });

xdescribe("isItPrime", () => {
    test("it returns true if the number is prime", () => {
        expect(isItPrime(13)).toBe(true);
    });

    test("it returns false if the number is not prime", () => {
        expect(isItPrime(26)).toBe(false);
    });

});

describe("isValidDNA", () => {
    test("it returns true if the DNA string is valid", () => {
        expect(isValidDNA("CGTA")).toBe(true);
    });

    test("it returns false if the DNA string is valid", () => {
        expect(isValidDNA("CLGTA")).toBe(false);
    });

});