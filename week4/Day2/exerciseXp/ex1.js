/* Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum. */

let funOfSum = (a, b) => {
        return a + b;
    }
    //console.log(funOfSum(5, 8));

/* 
Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

1.First, use function declaration and invoke it.
2.Then, use function expression and invoke it.
3.Write in a one line comment, the difference between function declaration and function expression.
4.Finally, use a one line arrow function and invoke it.
*/

//1.
function dec(kg) {
    return console.log(kg * 1000 + "gr")
}
//dec(5)
//3
let exp = function(kg) {
    return console.log(kg * 1000 + "gr")
}

//exp(5)

//3 
let arrowFunc = kg => console.log(kg * 1000 + " gr");
//arrowFunc(5);

/* 
Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
*/

/* (function selfInv(numOfChild, partsName, geoLoc, jobTit) {
    console.log(`You will be an ${jobTit} in ${geoLoc}, and married to ${partsName} with ${numOfChild} kids.`);
})(5, "Marlyn", "UK", "engineer"); */


/* 
John has just signed in to your website and you want to welcome him.

Create a Bootstrap Navbar in your HTML file.
In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
The function should add a div in the nabvar, displaying the name of the user and his profile picture.
*/
/* (function selfInv(nameOfUser) {
    let navAdd = document.querySelector(".container-fluid");
    let div = ` <div class="d-flex">
    <img src="WhatsApp Image 2023-08-31 at 14.18.02.jpg" alt="">
                    <p>${nameOfUser}</p>\
                   
                </div>`
    navAdd.innerHTML = div;

})("Nurlan"); */


/* Part I:
1.The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

2.The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

3.Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.*/
let sentences;

function makeJuice(sizeOfuice) {
    let ingredArr = [];
    let ings = '';
    (function addingreident(a, b, c) {
        ingredArr.push(a)
        ingredArr.push(b)
        ingredArr.push(c)
        return ings = `containing ${a}, ${b}, ${c} `;
    })("300gr sugar", "50 gr solt", "100 gr eroin");

    return sentences = `The client wants a ${sizeOfuice} juice, ` + ings;
}
makeJuice("small size");
let parag = document.querySelector(".par");
parag.innerText = sentences;

/* 
In the makeJuice function, create an empty array named ingredients.

The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.
*/