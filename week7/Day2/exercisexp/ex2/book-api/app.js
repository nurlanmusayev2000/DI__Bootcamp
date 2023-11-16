let express = require('express');
let app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
const books = [{
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedYear: 1925
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedYear: 1960
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949
    },
    {
        id: 4,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        publishedYear: 1951
    }
];

app.listen(5001, () => {
    console.log("server is listening");
})

app.use(express.json())
app.get('/api/books', (req, res) => {
    res.json(books)
})

app.get('/api/books/:bookId', (req, res) => {
    const idOfBook = Number(req.params.bookId);
    console.log(idOfBook);
    const index = books.findIndex(book => book.id == idOfBook)
    console.log(index);
    if (index == -1) {
        return res.send('book not found')
    }

    return res.json(books[index])


})


app.post('/api/books', (req, res) => {
    const newBook = {
        id: req.body.id,
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear

    }
    books.push(newBook)

    res.send(books)
})