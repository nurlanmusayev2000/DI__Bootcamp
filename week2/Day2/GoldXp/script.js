/* Ask the user which language they speak.

Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”

Create a few conditions :
If the user speaks French : display “Bonjour”
If the user speaks English : display “Hello”
If the user speaks Hebrew : display “Shalom”
If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’ */
let lang = prompt("Please tell us language that yoy speak");
let lowercases = lang.toLowerCase();
switch (lowercases) {
    case "french":
        alert("bonjour")
        break;
    case "english":
        alert("Hello")
        break;
    case "hebrew":
        alert("Shalom")
        break;
    case "polish":
        alert("czesc")
        break;
    case "azerbaijani":
        alert("salam")
        break;


    default:
        alert("01110011 01101111 01110010 01110010 01111001")
        break;
}


/* Exercise 2 : The Grade Assigner
Instructions
Ask the user for their grade.

If the grade is bigger than 90, console.log “A”

If the grade is between 80 and 90 (included), console.log “B”
If the grade is between 70(included) and 80 (included), console.log “C”
If the grade is lower than 70, console.log “D”
 */

let grade = prompt("Please add your final grade");

if (grade > 90) {
    console.log("A")
} else if (grade <= 90 && grade > 80) {
    console.log("B")
} else if (grade <= 80 && grade >= 70) {
    console.log("C")
} else {
    console.log("D")
}



/* Instructions
Prompt the user for a string. It must be a verb.
If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
If the length of the string is less than 3, leave it unchanged. */

let string = prompt("Please add here verb");
let isIng = string.includes("ing")
// !!! sertde sozun sonu ing ile bitidiyini yoxlamagini isteyir
// !!! includes() isletdiyin halda sozun ortasinda ing gelse bele onu true qebul edecek
if (string.length >= 3 && isIng == false) {
    console.log(string + "ing")
} else if (string.length >= 3 && isIng == true) {
    console.log(string + "ly")
} else {
    console.log(string)
}