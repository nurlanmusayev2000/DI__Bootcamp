function myMove() {

    let pos = 0;
    let animateEl = document.querySelector("#animate");
    let setTime = setInterval(() => {
        pos++;
        animateEl.style.left = pos + "px";
        if (pos == 350) {
            clearInterval(setTime)
        }
    }, 5)
}