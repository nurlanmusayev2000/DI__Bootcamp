let express = require('express');
let app = express();
const bookArr = [{
        id: 1,
        title: 'book1',
        author: 'author1',
        publishedYear: 2015
    },
    {
        id: 2,
        title: 'book2',
        author: 'author2',
        publishedYear: 2017
    },
    {
        id: 3,
        title: 'book3',
        author: 'author3',
        publishedYear: 2019
    },
    {
        id: 4,
        title: 'book4',
        author: 'author4',
        publishedYear: 2021
    }
]

app.listen(5000, () => {
    console.log('server is running');
})

app.get("/api/books", (req, res) => {
    res.json(bookArr)
})

app.get("/api/books/:bookId", (req, res) => {
    const id = Number(req.params.bookId);
    const bookArrId = bookArr.findIndex((valIn) => {
        bookArr.id == id
    })
    console.log(bookArrId);
    if (!bookArrId) {
        return res.sendStatus("ERROR 404 Not Found")
    }
    res.send(bookArrId)
})

/* 
PART 9  NOT COMPLETED

Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON body content. Inside the route handler, create a new book object with an incremented ID and the data from the request body. Add the new book to the books array and return a JSON response with the new book and a status code of 201 (Created).
 */


// EXERCISE 3 TAMAMLANMAYIB