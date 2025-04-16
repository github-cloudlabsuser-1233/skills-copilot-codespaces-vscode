def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Error! Division by zero."
    return a / b

def percentage(a, b):
    if b == 0:
        return "Error! Division by zero."
    return (a / b) * 100

def calculator():
    """
    A simple calculator function that allows the user to perform basic arithmetic operations.

    The user can choose from the following operations:
    1. Addition
    2. Subtraction
    3. Multiplication
    4. Division
    5. Percentage

    The function prompts the user to select an operation and input two numbers.
    It then performs the selected operation and displays the result.

    Functions used:
    - add(num1, num2): Returns the sum of num1 and num2.
    - subtract(num1, num2): Returns the difference between num1 and num2.
    - multiply(num1, num2): Returns the product of num1 and num2.
    - divide(num1, num2): Returns the quotient of num1 divided by num2.
    - percentage(num1, num2): Returns the percentage of num1 with respect to num2.

    Input:
    - choice (str): The operation to perform (1/2/3/4/5).
    - num1 (float): The first number.
    - num2 (float): The second number.

    Output:
    - Prints the result of the selected operation or an error message for invalid input.
    """
    print("Select operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Percentage")

    choice = input("Enter choice (1/2/3/4/5): ")

    if choice in ['1', '2', '3', '4', '5']:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))

        if choice == '1':
            print(f"The result is: {add(num1, num2)}")
        elif choice == '2':
            print(f"The result is: {subtract(num1, num2)}")
        elif choice == '3':
            print(f"The result is: {multiply(num1, num2)}")
        elif choice == '4':
            print(f"The result is: {divide(num1, num2)}")
        elif choice == '5':
            print(f"The result is: {percentage(num1, num2)}%")
    else:
        print("Invalid input")

if __name__ == "__main__":
    calculator()