//Exercise 1 : Age Difference
/* Instruction
Given the years two people were born, find the date when the younger one is exactly half the age of the older. */

/* 


let firstBirthYear = prompt("add your age");
let secondBirthYear = prompt("add your friend age");
let firstAge = 2020 - firstBirthYear;
let secondAge = 2020 - secondBirthYear;
if (firstAge > secondAge) {
    if (firstAge / 2 == secondAge) {
        alert("your age is twice bigger than your friend")
    }
} else {
    if (secondAge / 2 == firstAge) {
        alert("your friend's age is twice bigger than yours")
    }
}


 */


/* Harder exercise
Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

While working in a Post Office you must have the clients’ zip code in order to send them their letters.
Ask the client for their zip code and console.log “success” or “error” based on the following rules.
Zip codes consists of 5 numbers
Must only contain numbers
Must not contain any whitespace (spaces)
Must not be greater than 5 digits in length
 */

let zipCode = prompt("please enter your zipcode ");
console.log(zipCode.length);
console.log(typeof(zipCode))
let checktype = isNaN(zipCode);
console.log(checktype)
if (zipCode.length < 5 && zipCode != " " && checktype == false) {
    console.log('succes')
} else {
    console.log("error")
}