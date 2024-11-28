class Calculator {
    constructor() {
        this.value = 0;
    }

    add(number) {
        this.value += number;
        return this;
    }

    subtract(number) {
        this.value -= number;
        return this;
    }

    multiply(number) {
        this.value *= number;
        return this;
    }

    divide(number) {
        if (number === 0) {
            console.error("Cannot divide by zero");
            return this;
        }
        this.value /= number;
        return this;
    }

    clear() {
        this.value = 0;
        return this;
    }

    getResult() {
        return this.value;
    }
}

// Example usage:
const calc = new Calculator();
calc.add(10).subtract(2).multiply(3).divide(2);
console.log(calc.getResult()); // Output: 12

// FILE: test.test.js

const Calculator = require('./test.js');

describe('Calculator', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

    test('should initialize with value 0', () => {
        expect(calc.getResult()).toBe(0);
    });

    test('should add numbers correctly', () => {
        calc.add(5);
        expect(calc.getResult()).toBe(5);
    });

    test('should subtract numbers correctly', () => {
        calc.add(10).subtract(3);
        expect(calc.getResult()).toBe(7);
    });

    test('should multiply numbers correctly', () => {
        calc.add(2).multiply(3);
        expect(calc.getResult()).toBe(6);
    });

    test('should divide numbers correctly', () => {
        calc.add(10).divide(2);
        expect(calc.getResult()).toBe(5);
    });

    test('should not divide by zero', () => {
        console.error = jest.fn();
        calc.add(10).divide(0);
        expect(console.error).toHaveBeenCalledWith("Cannot divide by zero");
        expect(calc.getResult()).toBe(10);
    });

    test('should clear the value', () => {
        calc.add(10).clear();
        expect(calc.getResult()).toBe(0);
    });
});