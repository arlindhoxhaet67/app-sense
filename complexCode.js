/*
Filename: complexCode.js
Content: Complex JavaScript Code
*/

// Define a class named 'Person'
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Define a class named 'Employee' that extends 'Person'
class Employee extends Person {
  constructor(name, age, employeeId) {
    super(name, age);
    this.employeeId = employeeId;
  }

  work() {
    console.log(`${this.name} (${this.employeeId}) is working...`);
  }
}

// Create an instance of 'Employee' called 'john'
const john = new Employee("John Doe", 30, 12345);

// Call methods on 'john'
john.introduce(); // Output: Hello, my name is John Doe and I'm 30 years old.
john.work(); // Output: John Doe (12345) is working...

// Define a function to generate random numbers
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generate an array of 10 random numbers between 1 and 100
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
  randomNumbers.push(getRandomNumber(1, 100));
}

console.log("Generated random numbers:", randomNumbers);

// Sort the array of random numbers in ascending order
randomNumbers.sort((a, b) => a - b);
console.log("Sorted random numbers (ascending order):", randomNumbers);

// Reverse the sorted array of random numbers
randomNumbers.reverse();
console.log("Sorted random numbers (descending order):", randomNumbers);

// Create a function to calculate the sum of an array of numbers
function calculateSum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Calculate the sum of the random numbers
const sum = calculateSum(randomNumbers);
console.log("Sum of random numbers:", sum);

// Define an object representing a rectangle
const rectangle = {
  width: 10,
  height: 5,
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

console.log("Rectangle area:", rectangle.area()); // Output: 50
console.log("Rectangle perimeter:", rectangle.perimeter()); // Output: 30

// Define a helper function to check if a year is a leap year
function isLeapYear(year) {
  if (year % 4 !== 0) return false;
  else if (year % 100 !== 0) return true;
  else if (year % 400 !== 0) return false;
  else return true;
}

// Check if a few years are leap years
console.log("2020 is a leap year?", isLeapYear(2020)); // Output: true
console.log("2021 is a leap year?", isLeapYear(2021)); // Output: false
console.log("2024 is a leap year?", isLeapYear(2024)); // Output: true

// ... continue with more complex code (over 200 lines)