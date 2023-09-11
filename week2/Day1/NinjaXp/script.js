//For each expression, predict what you think the output will be in a comment (//) without first running the command.
//true -both of number and 5 is bigger than 1
console.log(5 >= 1);
//false
console.log(0 === 1);
// false 4 is not bigger than 1
console.log(4 <= 1);
//false 1 is equal 1
console.log(1 != 1);
//false ascci code of the a is lesser than B
console.log("A" > "B");
//true becouse of asccii code
console.log("B" < "C");
//true becouse ascii code of a is bigger than A
console.log("a" > "A");
//false same reason
console.log("b" < "A");
console.log(
    true === false,
    true != true);

/* Exercise 2 : Ask For Numbers
Instructions
Ask the user for a string of numbers separated by commas
Console.log the sum of the numbers.
Hint: use some string methods
 */

let numbers = "2 , 3"
console.log(numbers)

let num1 = numbers.substring(0, 1);
let num2 = numbers.substring(0, 2);
console.log(numbers.lastIndexOf());