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
console.log('A' > 'B');
//true becouse of asccii code
console.log('B' < 'C');
//true becouse ascii code of a is bigger than A
console.log('a' > 'A');
//false same reason
console.log('b' < 'A');
console.log(true === false, true != true);

/* Exercise 2 : Ask For Numbers
Instructions
Ask the user for a string of numbers separated by commas
Console.log the sum of the numbers.
Hint: use some string methods
 */

let numbers = '2,3';
console.log(numbers);

let num1 = Number(numbers.slice(0, 1));
let num2 = Number(numbers.slice(2, 3));
console.log(num1 + num2);

/* Hint: if statement (tomorrow’s lesson)

Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
Find the word “Nemo”
Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
If you can’t find Nemo, console.log “I can’t find Nemo”. */

let movie = 'I love the movie named Nemo';
let nemo = movie.split(' ');
let pos = nemo.indexOf('Nemo');
console.log('i found Nemo at ' + pos);

/* y fish is called Nemo, I love it" ➞ "I found Nemo at 4"


Exercise 4 : Boom
Instructions
Hint: if statement (tomorrow’s lesson)

Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

If the number given is less than 2 : return “boom”
If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
If the number given is evenly divisible by 2, add a exclamation mark to the end.
If the number given is evenly divisible by 5, return the string in ALL CAPS.
If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end. */

let number = prompt('please add the number 0-10');

if (number <= 2) {
  alert('boom');
} else if (number >= 2) {
  let letter = 'o';
  for (let i = 0; i < number; i++) {
    letter += 'o';
  }

  let big = 'b' + letter + 'm';
  if (number % 2 == 0) {
    alert(big + '!');
  }

  alert(big);
}


// ! exercise answer
/* 
if (number <= 2) {
  console.log('boom');
} else {
  let letter = 'o';

  let word = letter.repeat(number);

  if (number % 2 == 0) {
    console.log(word + '!');
  } else if (number % 5 == 0) {
    console.log(word.toUpperCase());
  } else if (number % 2 == 0 && number % 5 == 0) {
    let wordForBoth = word + '!';
    console.log(wordForBoth.toUpperCase());
  } else {
    console.log(word);
  }
} */

// !
