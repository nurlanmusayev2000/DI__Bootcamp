for (let i = 0; i < 1509; i++) {
    document.querySelector(".right-side").innerHTML += `<div></div>`

}
let colors = document.querySelectorAll('.colors div');
let cell = document.querySelectorAll('.right-side div')
let color;
let bool;
let colorArr = [];
let randomColors = () => {


    colors.forEach((el) => {
        let x = Math.floor((Math.random() * 250));
        let y = Math.floor((Math.random() * 250));
        let z = Math.floor((Math.random() * 250));
        color = el.style.backgroundColor = `rgb(${x},${y},${z})`
        colorArr.push(el)
    });
}


let takeColor;
/* ------------------------------------------------------- */
randomColors();
console.log(colorArr);
let mouseDown = (e) => {
    bool = true;
    e.target.style.backgroundColor = takeColor;


}

function mouseOver(e) {
    if (bool == true) {
        console.log("you can mouse over");
        e.target.style.backgroundColor = takeColor;

    }
}

function mouseUp() {
    bool = false
}
for (let oneColor of colorArr) {
    oneColor.addEventListener("click", (e) => {
        takeColor = e.target.style.backgroundColor;

        for (element of cell) {
            element.addEventListener("mousedown", mouseDown);
            element.addEventListener("mouseover", mouseOver);
            element.addEventListener("mouseup", mouseUp);
        }
    })
}