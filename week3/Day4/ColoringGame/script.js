// colors
let bool = false;
let leftSideCol = document.querySelector(".colors");
let colors = ["red", "orange", "orangered", "yellow", "lightgreen", "yellowgreen", "darkgreen", "blue", "aqua", "blueviolet", "pink", "black", "lightcoral", "lightcyan", "lightgray", "lightpink", "lightsalmon", "darkblue", "darkcyan", "green", "white"];
for (let i = 0; i < 21; i++) {
    let cubicadd = `<input class="cubic col-4 "></input>`
    leftSideCol.innerHTML += cubicadd;


}
let cubic = document.querySelectorAll(".cubic");
for (let i = 0; i < cubic.length; i++) {
    cubic[i].style.backgroundColor = colors[i];
    cubic[i].value = colors[i]
}
let rightZone = document.querySelector(".right-sideBar");
for (let i = 0; i < 1800; i++) {
    let colorZone = `<div class="colorZone"></div>`;
    rightZone.innerHTML += colorZone;

}

///backside

let pickedColor = " ";
for (let i = 0; i < colors.length; i++) {

    cubic[i].addEventListener("click", function clickColor(e) {
        console.log("i clicked the color");
        pickedColor = e.target.value;


    })
}

let allDivs = document.querySelectorAll(".colorZone");

for (let div of allDivs) {
    div.addEventListener("mousedown", function mDown(e) {

        console.log("i mousedown the zone");
        e.target.style.backgroundColor = pickedColor;
        bool = true;


    })
    div.addEventListener("mouseup", () => {
        console.log("i mouseup the zone");
        bool = false;
    })

    div.addEventListener("mouseover", (e) => {
        if (!bool) {
            return
        }
        e.target.style.backgroundColor = pickedColor;
    })






}

let button = document.querySelector(".btn");
button.addEventListener("click", () => {
    for (let div of allDivs) {
        div.style.backgroundColor = "white";
    }
})