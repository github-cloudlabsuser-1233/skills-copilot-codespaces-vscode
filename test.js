// A simple calculator program
class Calculator {
    // Add two numbers
    add(a, b) {
        return a + b;
    }

    // Subtract two numbers
    subtract(a, b) {
        return a - b;
    }

    // Multiply two numbers
    multiply(a, b) {
        return a * b;
    }

    // Divide two numbers
    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

// Example usage
const calculator = new Calculator();

console.log("Addition: 5 + 3 =", calculator.add(5, 3));
console.log("Subtraction: 5 - 3 =", calculator.subtract(5, 3));
console.log("Multiplication: 5 * 3 =", calculator.multiply(5, 3));
console.log("Division: 6 / 3 =", calculator.divide(6, 3));

try {
    console.log("Division by zero: 6 / 0 =", calculator.divide(6, 0));
} catch (error) {
    console.error(error.message);
}