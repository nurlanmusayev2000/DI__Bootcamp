let allBooks = [{
        title: "Kite Runner",
        author: "Khalid Huseini",
        image: "https://upload.wikimedia.org/wikipedia/en/6/62/Kite_runner.jpg",
        alreadyRead: true
    },
    {
        title: "My Sweet Orange Tree",
        author: "Jose Maoro",
        image: "https://upload.wikimedia.org/wikipedia/tr/a/a1/%C5%9Eeker_Portakal%C4%B1_kapak.jpg",
        alreadyRead: false
    }


]

let containerDiv = document.querySelector(".listBooks");
let paragraph;
let img;
for (book of allBooks) {
    paragraph = document.createElement('p');
    paragraph.textContent = `${book.title} written by ${book.author}`;
    containerDiv.appendChild(paragraph)
    img = document.createElement("img");
    img.style.width = "100px"
    img.setAttribute("src", book.image);
    containerDiv.appendChild(img);
    if (book.alreadyRead == true) {
        paragraph.style.background = "green"
    }


}