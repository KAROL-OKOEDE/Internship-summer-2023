// console.log('I am working externally!');

// Commenting in JS
// Single line comment
// Multi line comment

// console.log('commented');

/*
console.log('hey');
console.log('hey');
console.log('hey');
console.log('hey');
console.log('hey');
console.log('hey');
console.log('hey');
console.log('hey');
*/

// console.log('multiple');
// console.log('multiple');
// console.log('multiple');
// console.log('multiple');
// console.log('multiple');
// console.log('multiple');
// console.log('multiple');
// console.log('multiple');

/* Variables and Variables Declaration */
// I think of a number. I add 3 to the number. The result is 5. What is the number?
// Let the number be adeyinka
// adeyinka + 3 = 5
// adeyinka = 5 - 3
// adeyinka = 2
// A variable is a container or a placeholder that stores data.

// Variable Declaration
// var, let, const
let karol = 19;
// console.log(karol);

// Reassigning or mutating a variable
 karol = 50;
//  console.log(karol);

let yinka = 35;
// console.log(yinka);

var olumide = 10;
// console.log(olumide);

olumide = 65;
// console.log(olumide);

const josh = 87;
// console.log(josh);

// josh = 45;
// console.log(josh);

// CamelCase Notation
// place of birth
let placeOfBirth = 'Maryland in Ghana';
let maritalStatus = 'Engaged';

// console.log(maritalStatus);

// --DataTypes(Primitives)
// 1. Number
let age = 20;

// 2. String
const school = 'Harvard';
let place = 'Lagos State, Nigeria';
// console.log(school);
// console.log(place);

// 3. Boolean It is either true or false
let stat = true;
// console.log(stat);

const isHeMarried = false;
// console.log(isHeMarried);

// 4. Undefined. A variable that has no value

let emmanuel;
// console.log(emmanuel); //Undefined in the console

emmanuel = 'Young man';
// console.log(emmanuel);

// 5. Null. It has a value and the value is nothing
let myNumber = null;
// console.log(myNumber);

// Type coercion
let myName = 'John Grisham';
let mySchool = 'Yale';
let myOccupation = 'Software Engineer';
let amISingle = false;
let myAge = 18;

// console.log('Hello! I am ' + myName + '. I am an ' + myAge + ' year old student of ' + mySchool + '. I am a ' + myOccupation + '. Am I single? ' + amISingle + '.');

// alert('Hello! I am ' + myName + '. I am an ' + myAge + ' year old student of ' + mySchool + '. I am a ' + myOccupation + '. Am I single? ' + amISingle + '.');

// let myScore = prompt('what is your score?');
// console.log(myScore);

// Basic Operators in JS
// Math Operators +, -, /, *
let firstNum = 12;
let secondNum = 13;
let total = firstNum + secondNum; //Also do  -, * and /
// console.log(total);

// Logical Operators. Returns true or false
// === means it is the same as
// !== means not the same as
// > means greater than
// < less than
// >= means greater than or equals to
// <= means less than or equals to
// variable generally is true or present
// !variable generally means not true or present

// Typeof operator
// typeof operator. It's used to check the type of data a variable is
// console.log(typeof 'john');
// console.log(typeof 12);
// console.log(typeof false);

// let john = 'Nigerian';
// let mary = !john;
// console.log(mary);

let newNum = 3 * 5;
let newNum2 = 75 / 5;
let newNumCheck = newNum === newNum2; //Check also with !==, >, <, >=, <= 
// console.log(newNumCheck);

// Operator Precedence
let x = y = 2 * (12 + 6) / 3; //12
// console.log(x, y);

// More Operators
// x = x + 2;
x += 2;
// console.log(x, y);

// x -= 1;
// console.log(x, y);

// x *= 3;
// console.log(x, y);

// x /= 3;
// console.log(x, y);

// x++;
// console.log(x, y);

// x--;
// console.log(x, y);

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
*/

// Assignment 2
/***
 Create 2 variables that prompts users to enter their first name and last name and alert the result.
 */


// Assignment 3
/**
  Create 2 variables that prompts users to enter 2 different numbers. Store the result in another variable that adds the 2 numbers. Alert the new variable(the result). 
  Using the logic above, do the same thing for subtraction, division and multiplication

  Goodluck once again😊
  */

/**
 * --Control Flow
 */

// If / Else Statements
// Ternary Operator
// Switch Statements

/**
 * If / Else Statement
 */

// Let's assume I want to buy rice from the local restaurant and I want add-ons. The condition for me buying the food is that there must always be add-ons
let addOn = 'yam';
// if(condition) {
  // do whatever is here
// }
// IF
// if(addOn === 'chicken') {
//   console.log('Buy rice and ' + addOn);
// }

// IF / Else
// syntax
  // if(condition) {
  // Do this here 
  // } else {
  // Do this here 
  // }


// if(addOn === 'spaghetti') {
//   console.log('Buy rice and ' + addOn);
// } else {
//   console.log('Buy rice alone');
// }

// If / else if / else
// if(addOn === 'spaghetti') {
//   console.log('Buy rice and ' + addOn);
// } else if(addOn === 'chicken') {
//   console.log('Buy rice and ' + addOn);
// } else if(addOn === 'beans') {
//   console.log('Buy rice and ' + addOn);
// } else if(addOn === 'plantain') {
//   console.log('Buy rice and ' + addOn);
// } else {
//   console.log('Buy rice alone');
// }


// Ternary Operator
// Syntax
// condition ? do this here : do this other one

// addOn === 'spaghetti' ? console.log('Buy rice and ' + addOn) : console.log('Buy rice alone');

// For multiple ternary conditions
// addOn === 'spaghetti' ? console.log('Buy rice and ' + addOn)
//  : addOn === 'chicken' ? console.log('Buy rice and ' + condition)
//  : addOn === 'beans' ? console.log('Buy rice and ' + condition)
//  : console.log('Buy rice alone');


// For one condition ternary
// addOn === 'spaghetti' ? console.log('Buy rice and ' + addOn) : null;

// Shorthand for one condition ternary
// addOn === 'spaghetti' && console.log('Buy rice and ' + addOn);

// Switch
/**
 Syntax
 switch(variable to be checked) {
  case 'usecase': do whatever is here
  break;
  case 'usecase': do whatever is here
  break;
  case 'usecase': do whatever is here
  break;
  case 'usecase': do whatever is here
  break;
  default: do this regardless if no condition is met
 }
 */

//  switch(addOn) {
//   case 'spaghetti': console.log('Buy rice and ' + addOn);
//   break;
//   case 'chicken': console.log('Buy rice and ' + addOn);
//   break;
//   case 'beans': console.log('Buy rice and ' + addOn);
//   break;
//   default: console.log('Buy rice alone');
//  }


/*Using multiple operators for logic in conditions
let maleAge = 22;
let male = 'Adekunle';

if(maleAge < 13) {
  console.log(male + ' takes milk');
} else if(maleAge >= 13 && maleAge <= 17) {
  console.log(male + ' takes juice or soda');
} else {
  console.log(male + ' takes vodka');
}
*/
// Tasks on Control Flow
/*
1. Ayodele and Uchenna both play basketball in different teams. In the latest 3 games, Ayodele's team scored 89, 120 and 103 points, while Uchenna's team scored 116, 94 and 123 points.

a. Calculate the average score for each team
b. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
c. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

d. EXTRA: Jumoke also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. 
e. Like before, change the scores to generate different winners, keeping in mind there might be draws.

You can do this  💪
*/

/**
 2. Create a simple conditional statement that checks if a variable named favoriteFood is different types of food. Check for minimum of 5 different foods. Do these using if/else statements.

 3. Create a simple age checking verifier that prompts users to enter their name and also prompts them to enter their age and alerts based on the conditions below:
 a. A person less than 16 is alerted to be too young to drive
 b. A person between 16 to 18 is alerted to drive with caution
 c. A person who is over 18 is alerted to continue driving 

 4.Use the ternary operator to check if 100 points is enough to win the league in EPL(English Premier League). Hint: you can create 2 variables; one for any team name of your choice and the second for 100points.
 You can change the value of the variable to see the toggle in the ternary operator 
 */



 //Solutions


 //1.)
 //a.
 let ayodeleAverage;
 let uchennaAverage;
 let jumokeAverage;

 ayodeleAverage = (89 + 120 + 103)/ 3;
 console.log('this is the average of Ayodele team: ' + ayodeleAverage);

 uchennaAverage = (116 + 94 + 123)/ 3;
 console.log('this is the average of Uchenna team: ' + uchennaAverage);

 jumokeAverage = (97 + 134 + 105)/ 3;
 console.log('this is the average of Jumoke team: ' + jumokeAverage);

 //b.
 if (uchennaAverage >ayodeleAverage) {
  console.log('Uchenna team had the higher average');
 }else if (ayodeleAverage > uchennaAverage) {
  console.log('Ayodele team had the higher average'); 
 } else {
  console.log('Both teams have the same average');
}

//d 
if (uchennaAverage >ayodeleAverage && uchennaAverage > jumokeAverage) {
  console.log('Uchenna team had the higher average');
 }else if (ayodeleAverage > uchennaAverage && ayodeleAverage > jumokeAverage) {
  console.log('Ayodele team had the higher average'); 
 } else if (jumokeAverage >uchennaAverage && jumokeAverage >ayodeleAverage) {
  console.log('Jumoke team had the higher average');
 }
  else {
  console.log('All the teams have the same average');
}



//2.
let favoriteFood;

if (favoriteFood === "Pizza") {
  console.log("Your favorite food is Pizza!");
} else if (favoriteFood === "Burgers") {
  console.log("Your favorite food is Burgers!");
} else if (favoriteFood === "Sushi") {
  console.log("Your favorite food is Sushi!");
} else if (favoriteFood === "Pasta") {
  console.log("Your favorite food is Pasta!");
} else if (favoriteFood === "Salad") {
  console.log("Your favorite food is Salad!");
} else {
  console.log("Your favorite food is not Pizza, Burgers, Sushi, Pasta, or Salad.");
}


//3
// Ask the user for their name and store it in a variable called "name"
const name = prompt("What's your name?");

// Ask the user for their age and convert the input into a number
const Age = parseInt(prompt("How old are you?"));

// Check the age and show a message based on the age
if (Age < 16) {
  // If the age is less than 16, display a message for being too young to drive
  alert(`${name}, you are too young to drive.`);
} else if (Age <= 18) {
  // If the age is between 16 and 18 (inclusive), display a cautionary message
  alert(`${name}, drive with caution.`);
} else {
  // If the age is over 18, display a message that they can continue driving
  alert(`${name}, you can continue driving.`);
}


//4
// Define the team name and points needed to win
const teamName = "Manchester City"; 
const pointsNeededToWin = 100; 

let isEnoughToWin;

if (pointsNeededToWin >= 100) {
  isEnoughToWin = true;
} else {
  isEnoughToWin = false;
}

// Display a message based on the result
if (isEnoughToWin) {
  console.log(`${teamName} has enough points (${pointsNeededToWin}) to win the EPL!`);
} else {
  console.log(`${teamName} does not have enough points (${pointsNeededToWin}) to win the EPL.`);
}





