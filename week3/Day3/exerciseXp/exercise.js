/* In your Javascript file, using setTimeout, call a function after 2 seconds.
The function will alert “Hello World”. 
In your Javascript file, using setTimeout, call a function after 2 seconds.
The function will add a new paragraph <p>Hello World</p> to the <div id="container">.*/
let con = document.querySelector("div")
let i = 0;

function hWorldFunc() {
    console.log("salam");
    let createPar = document.createElement("p");
    con.appendChild(createPar);
    let par = document.querySelectorAll("p");
    // alert('helloWorld')

    par[i].innerText = " Hello World ,";
    i++;

}

//setTimeout(hWorldFunc, 2000)

/* 
In your Javascript file, using setInterval, call a function every 2 seconds.
The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
The interval will be cleared (ie. clearInterval), when the user will click on the button.
Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
 */

let setTime = setInterval(hWorldFunc, 2000);
let button = document.querySelector("#clear");
button.addEventListener("click", () => {
    let stopTime = clearInterval(setTime)
})