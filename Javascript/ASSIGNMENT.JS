/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

a. Store Mark's and John's mass and height in variables
b. Calculate both their BMIs
c. Create a boolean variable containing information about whether Mark has a higher BMI than John.
d. Print a string to the console containing the variable from step 3  (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀


// a. Store Mark's and John's mass and height in variables
var markMass = 70; // Mark's mass in kilograms
var markHeight = 1.75; // Mark's height in meters

var johnMass = 75; // John's mass in kilograms
var johnHeight = 1.80; // John's height in meters

// b. Calculate both their BMIs
var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

// c. Create a boolean variable containing information about whether Mark has a higher BMI than John.
var isMarkHigherBMI = markBMI > johnBMI;

// d. Print a string to the console containing the variable from step 3
console.log("Is Mark's BMI higher than John's? " + isMarkHigherBMI);


// Assignment 2
/***
 Create 2 variables that prompts users to enter their first name and last name and alert the result.
 

// Prompt the user for their first name and store it in a variable
var firstName = prompt("Please enter your first name:");

// Prompt the user for their last name and store it in a variable
var lastName = prompt("Please enter your last name:");

// Create a message using the entered names
var message = "Hello, " + firstName + " " + lastName + "!";

// Display the message using an alert
alert(message);


*/




var num1 = Number(prompt("Please enter the first number:"));
var num2 =Number(prompt("Please enter the second number:"));

// Perform addition
var additionResult = num1 + num2;

// Perform subtraction
var subtractionResult = num1 - num2;

// Perform division
var divisionResult = num1 / num2;

// Perform multiplication
var multiplicationResult = num1 * num2;

// Display the results using alerts
alert("Addition Result: " + additionResult);
alert("Subtraction Result: " + subtractionResult);
alert("Division Result: " + divisionResult);
alert("Multiplication Result: " + multiplicationResult);

