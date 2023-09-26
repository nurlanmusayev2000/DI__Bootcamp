/* 1.Write a JavaScript program to find the sum of all elements in an array. */
let array = [5, 15, 10, 5, 15, 8, 6, 9, 21, 32]
    /* let sum = 0;
    array.forEach(element => sum += element); */
    //console.log(sum);
    /* 2.Write a JavaScript program to remove duplicate items in an array. */
    //let dublic = [...new Set(array)]
let dublic = [];
array.forEach(((element, i) => {
    array.indexOf(element) == i ? dublic.push(element) : false
}))

//console.log(dublic);

/* Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array. */

let sample = [NaN, 0, 15, false, -22, '', undefined, 47, null];
let expected = sample.filter((e) => {
    return e != 0 && !isNaN(e) && e != null
});


/* Write a JavaScript function to concatenate a given string n times (default is 1).
Create the repeat function yourself: */

function repeat(element, counter) {
    let elementrepeat = element;
    for (let i = 0; i < counter - 1; i++) {

        element += elementrepeat;
    }
    return element
}

//console.log(repeat("ha!", 8));

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
turtle = turtle.padStart(7);
rabbit = rabbit.padStart(7);

console.log(startLine);
console.log(turtle);
console.log(rabbit);

console.log(turtle = turtle.trim().padEnd(9, '='));