// Filename: ComplexProgram.js
// Description: A complex JavaScript program that performs various calculations and manipulations.

// Function to calculate the factorial of a number
function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}

// Function to find the greatest common divisor (GCD) of two numbers
function findGCD(a, b) {
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
}

// Function to generate Fibonacci Series up to a given number of terms
function generateFibonacciSeries(numTerms) {
  let fibonacciSeries = [0, 1];
  for (let i = 2; i < numTerms; i++) {
    fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
  }
  return fibonacciSeries;
}

// Object representing a complex number
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Method to add two complex numbers
  add(otherComplexNumber) {
    const realSum = this.real + otherComplexNumber.real;
    const imaginarySum = this.imaginary + otherComplexNumber.imaginary;
    return new ComplexNumber(realSum, imaginarySum);
  }

  // Method to subtract two complex numbers
  subtract(otherComplexNumber) {
    const realDifference = this.real - otherComplexNumber.real;
    const imaginaryDifference = this.imaginary - otherComplexNumber.imaginary;
    return new ComplexNumber(realDifference, imaginaryDifference);
  }

  // Method to multiply two complex numbers
  multiply(otherComplexNumber) {
    const realProduct = (this.real * otherComplexNumber.real) - (this.imaginary * otherComplexNumber.imaginary);
    const imaginaryProduct = (this.real * otherComplexNumber.imaginary) + (this.imaginary * otherComplexNumber.real);
    return new ComplexNumber(realProduct, imaginaryProduct);
  }

  // Method to calculate the absolute value of a complex number
  absolute() {
    return Math.sqrt((this.real ** 2) + (this.imaginary ** 2));
  }
}

// Main program entry point
(function () {
  // Calculate factorial of 8
  const factorialOf8 = calculateFactorial(8);
  console.log("Factorial of 8:", factorialOf8);

  // Find GCD of 15 and 10
  const gcdOf15And10 = findGCD(15, 10);
  console.log("GCD of 15 and 10:", gcdOf15And10);

  // Generate Fibonacci Series with 10 terms
  const fibonacciSeries = generateFibonacciSeries(10);
  console.log("Fibonacci series:", fibonacciSeries);

  // Perform complex number operations
  const complexNumber1 = new ComplexNumber(3, 2);
  const complexNumber2 = new ComplexNumber(1, -4);

  const sumResult = complexNumber1.add(complexNumber2);
  console.log("Sum of complex numbers:", sumResult);
  
  const differenceResult = complexNumber1.subtract(complexNumber2);
  console.log("Difference of complex numbers:", differenceResult);
  
  const productResult = complexNumber1.multiply(complexNumber2);
  console.log("Product of complex numbers:", productResult);

  const absoluteValue = complexNumber1.absolute();
  console.log("Absolute value of complex number 1:", absoluteValue);
})();
