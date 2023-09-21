//In your Javascript file add the functionality which will allow you to drag the box and drop it into the target. Check out the Course Notes named DOM animations.

let allowDrop = (e) => {
    e.preventDefault();

}

let put = (e) => {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    let box = document.getElementById(data)
    e.target.appendChild(box);
}

function takeFunc(e) {
    e.dataTransfer.setData("text", e.target.id);

}

// !!! yazilan kodda qarisiqliq var islemir
// !!! asagidaki kod isleyir 

/*   ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
} */