/* Write code to remove “Greg” from the people array.

Write code to replace “James” to “Jason”.

Write code to add your name to the end of the people array.

Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

Write code to make a copy of the people array using the slice method.

The copy should NOT include “Mary” or your name.

Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
Hint: Check out the documentation for the slice method

Write code that gives the index of “Foo”. Why does it return -1 ?

Create a variable called last which value is the last element of the array.
Hint: What is the relationship between the index of the last element in the array and the length of the array? */

const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
let indexofJames = people.indexOf("James");
people.splice(indexofJames, 1, "Jason")
people.push("Nurlan");
//console.log(people.indexOf("Mary"));
let indexofMary = people.indexOf("Mary");
let indexOfNurlan = people.indexOf("Nurlan");
let copy = people.slice(indexofMary + 1, indexOfNurlan);
//console.log(people.length - 1) //Between indexof and length is that indexof beginning from 0
//console.log(people)

/* Using a loop, iterate through the people array and console.log each person.

Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
Hint: take a look at the break statement in the lesson. */

for (person of people) {
    // console.log(person)
}

let names = "";
for (person of people) {
    if (person == "Devon") {
        names += person;
        break;
    }
}
//console.log(names);


///
/* 
Create an array called colors where the value is a list of your five favorite colors.
Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
Hint : create an array of suffixes to do the Bonus
 */

let colors = ["blue", "yellow", "green", "black", "grey"];
let suffix = ["1st", "2nd", "3rd", "4th", "5th"]
let sentence = "";

for (myColor in colors) {
    sentence = `My #${Number(myColor) + 1} choice is ${colors[myColor]}`
        //console.log(sentence)
}

for (let i = 0; i < colors.length; i++) {

    sentence = `My ${suffix[i]} color is ${colors[i]}`
        // console.log(sentence)

}



///

/* 
Prompt the user for a number.
Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

While the number is smaller than 10 continue asking the user for a new number.
Tip : Which while loop is more relevant for this situation?
*/
/* 
let num = prompt("add a number please");

if (!isNaN(num) && num < 10) {
    num = prompt("please add a new number")
} else if (num > 10) {
    alert("thank you")
} else { alert("it is not a number") }



 do {
    var num = prompt("add a number please");
}
while (num > 10) {
    num = prompt("add a new number grater than 10")
}
 */




/* Copy and paste the above object to your Javascript file.

Console.log the number of floors in the building.

Console.log how many apartments are on the floors 1 and 3.

Console.log the name of the second tenant and the number of rooms he has in his apartment.

Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200. */

const building = {
        numberOfFloors: 4,
        numberOfAptByFloor: {
            firstFloor: 3,
            secondFloor: 4,
            thirdFloor: 9,
            fourthFloor: 2,
        },
        nameOfTenants: ["Sarah", "Dan", "David"],
        numberOfRoomsAndRent: {
            sarah: [3, 1050],
            dan: [4, 1000],
            david: [1, 1100],
        },
    }
    //console.log(building.numberOfFloors);
    //console.log("first floor " + building.numberOfAptByFloor.firstFloor + " and " + "third floor " + building.numberOfAptByFloor.thirdFloor)

//console.log(`the name of the second tenant ${building.nameOfTenants[1]} and the number of rooms he has in his apartment ${building.numberOfRoomsAndRent.dan[0]}`)

if (building.numberOfRoomsAndRent.sarah[1] > building.numberOfRoomsAndRent.dan[1] && building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}
//console.log(building.numberOfRoomsAndRent.dan[1])



/* Create an object called family with a few key value pairs.
Using a for in loop, console.log the keys of the object.
Using a for in loop, console.log the values of the object.
 */


let family = {
    father: "David",
    mother: "Jessie",
    son: "Joe"

}

for (keys in family) {
    //console.log(keys)
    // console.log(family[keys])
}


////

/* }
Given the object above and using a for loop, console.log “my name is Rudolf the raindeer” */
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
let sentences = "";
for (item in details) {
    sentences += `${item} ${details[item]} `

}
//console.log(sentences)



///
/* A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
Hint: a string is an array of letters
Console.log the name of their secret society. The output should be “ABJKPS” */

const namees = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let abc = namees.sort();
let firstLetters = "";
for (item of abc) {
    firstLetters += item[0]
}
//console.log(firstLetters)