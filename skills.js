// function to covert Celsius
// to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Driver code
const celsius = 25;
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius} Celsius is equal to ${fahrenheit} Fahrenheit`);