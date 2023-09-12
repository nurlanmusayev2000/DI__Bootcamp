//Write some simple Javascript code that will join all the items in the array above, and console.log the result.
let sentence = ["my", "favorite", "color", "is", "blue"];
let sentence1 = sentence[0] + " " + sentence[1] + " " + sentence[2] + " " + sentence[3] + " " + sentence[4];
console.log(sentence1);

//! sentence.join(" ") daha elverisli


//Exercise2
//Create 2 variables. The values should be strings.
let var1 = "salam";
let var2 = "necesen";

//2. Slice out and swap the first 2 characters of the two strings from part 1.
console.log(var1.slice(2))
console.log(var2.slice(2))

//3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).4. Finally console.log the new concatenated string.

let var3 = var1 + " " + var2;
console.log(var3);


/* Exercise 3 : Calculator
Instructions
Make a Calculator. Follow the instructions:

Prompt the user for the first number.
Store the first number in a variable called num1.
Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
Prompt the user for the second number.
Store the second number in a variable called num2.
Create an Alert where the value is the SUM of num1 and num2.
 */


let firstNumber = prompt('Can you say us the first number');
let num1 = Number(firstNumber);
console.log(typeof(firstNumber));
console.log(typeof(num1));
let secondNumber = prompt('Please tell us the second secret number');
let num2 = Number(secondNumber);
let sum = num1 + num2;
alert(sum);