// // Make a keyless car!
// /*
// This car will only let you drive if you are over 18. Make it do the following:

// Using prompt() and alert(), ask a user for their age.

// IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
// IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
// IF they say they are over 18, respond with: "Powering On. Enjoy the ride!" */

// let age = prompt("Please Enter your age")
// if (age < 18) {
//     alert("Sorry, you are too young to drive this car. Powering off")
// } else if (age == 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!")
// } else {
//     alert("Powering On. Enjoy the ride!")
// }


// /* Write as comments the steps of the resolution of this piece of code

// Guess what will be the result before checking it */
// let b = 2 + 2;

// switch (b) {
//     case 3:
//         alert('Too small');
//         break;
//     case 4:
//         alert('Exactly!');
//         break;
//     case 5:
//         alert('Too large');
//         break;
//     default:
//         alert("I don't know such values");
// }


// /* Write as comments the steps of the resolution of this piece of code

// Guess what will be the result before checking it */

// let a = 2 + 2;

// switch (a) {
//     case 4:
//         alert('Right!');
//         break;

//     case 3: // (*) grouped two cases
//     case 5:
//         alert('Wrong!');
//         alert("Why don't you take a math class?");
//         break;

//     default:
//         alert('The result is strange. Really.');
// }


/* Create a stuctured html file linked to a JS file

1. Create an object that has properties "username" and "password". Fill those values in with strings.


2. Create an array which contains the object you have made above and name the array "database".

3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline". */

//1. Create an object that has properties "username" and "password". Fill those values in with strings.
let login = {
    username: "nurlan2000",
    password: "11235n"
};

//2. Create an array which contains the object you have made above and name the array "database".

let database = [login];
console.log(database)


//3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline". */

let newsfeed = [
    { username: login.username }, { password: database[0].password },
    { timeline: "25min" }
]
console.log(newsfeed)