let pos = 0;
function myMove() {
  let animateEl = document.querySelector('#animate');
  let setTime = setInterval(() => {
    pos++;
    animateEl.style.left = pos + 'px';
    if (pos == 350) {
      clearInterval(setTime);
      pos = 0;
    }
  }, 5);
}
