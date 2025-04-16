const Calculator = require('./test'); // Adjust the path if necessary

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should add two numbers correctly', () => {
        expect(calculator.add(5, 3)).toBe(8);
        expect(calculator.add(-5, 3)).toBe(-2);
        expect(calculator.add(0, 0)).toBe(0);
    });

    test('should subtract two numbers correctly', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
        expect(calculator.subtract(3, 5)).toBe(-2);
        expect(calculator.subtract(0, 0)).toBe(0);
    });

    test('should multiply two numbers correctly', () => {
        expect(calculator.multiply(5, 3)).toBe(15);
        expect(calculator.multiply(-5, 3)).toBe(-15);
        expect(calculator.multiply(0, 3)).toBe(0);
    });

    test('should divide two numbers correctly', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        expect(calculator.divide(-6, 3)).toBe(-2);
        expect(calculator.divide(0, 3)).toBe(0);
    });

    test('should throw an error when dividing by zero', () => {
        expect(() => calculator.divide(6, 0)).toThrow('Division by zero is not allowed.');
    });
});