let clas = new XMLHttpRequest();
let url = "https://api.giphy.com/v1/gifs/random?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
let imgurl;
clas.open('GET', url);
clas.responseType = 'json';
clas.send();

function repeat() {
    clas.onload = () => {
        function repeat() {
            imgurl = clas.response.data.images.original.url;
            console.log(imgurl);
            container(imgurl);
        }
        repeat()

    }
}
repeat()



let container = (a) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", a);
    let sec = document.querySelector(".section");
    sec.appendChild(div);
    div.appendChild(img)
}