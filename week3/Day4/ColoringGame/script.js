// colors
let bool = true;
let leftSideCol = document.querySelector(".colors");
let colors = ["red", "orange", "orangered", "yellow", "lightgreen", "yellowgreen", "darkgreen", "blue", "aqua", "blueviolet", "pink", "black", "lightcoral", "lightcyan", "lightgray", "lightpink", "lightsalmon", "darkblue", "darkcyan", "green", "white"];
for (let i = 0; i < 21; i++) {
    let cubicadd = `<div class="cubic col-4 "></div>`
    leftSideCol.innerHTML += cubicadd;


}
let cubic = document.querySelectorAll(".cubic");
for (let i = 0; i < cubic.length; i++) {
    cubic[i].style.backgroundColor = colors[i];
    cubic[i].classList.add(colors[i])
}
let rightZone = document.querySelector(".right-sideBar");
for (let i = 0; i < 1794; i++) {
    let colorZone = `<div class="colorZone"></div>`;
    rightZone.innerHTML += colorZone;

}
///backside
for (let i = 0; i < colors.length; i++) {

    cubic[i].addEventListener("click", function clickColor(e) {
        console.log("i clicked the color");
        let target = e.target;

        let colorPicked = document.querySelectorAll(".colorZone");

        for (let j = 0; j < colorPicked.length; j++) {
            colorPicked[j].addEventListener("mousedown", function mDown(e) {

                console.log("i mousedown the zone");
                e.target.style.backgroundColor = colors[i]
                if (bool) {
                    for (let j = 0; j < colorPicked.length; j++) {


                        colorPicked[j].addEventListener("mouseover", (e) => {
                            console.log("i mouseOver on the zone");
                            e.target.style.backgroundColor = colors[i]
                            colorPicked[j].addEventListener("mouseup", (e) => {
                                console.log("mouse upped");
                                bool = false;




                            })

                        })

                    }
                }
            })



        }
    })
}