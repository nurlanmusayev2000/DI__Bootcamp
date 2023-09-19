//Using a DOM property, retrieve the h1 and console.log it.
let h1 = document.querySelector("h1");
/* console.log(h1); */
//Using DOM methods, remove the last paragraph in the <article> tag.
let lastPar = document.querySelector("article").lastElementChild;
lastPar.remove();
//Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let h2 = document.querySelector("h2");

function backgroundChange() {
    h2.style.backgroundColor = "red";
}
//Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

let h3 = document.querySelector("h3");
h3.addEventListener("click", invisibility);

function invisibility() {
    h3.style.display = "none"
}
//Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
function makeBold() {

    let pars = document.querySelectorAll("p");
    for (paragraph of pars) {
        paragraph.style.fontWeight = "bold";
    }
}

//BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100

function fontSize() {
    let mathRandom = Math.floor(Math.random() * 100);
    h1.style.fontSize = `${mathRandom}px`
}

//BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
function fading() {
    h2.classList.add("tap-pane", "fade")
}