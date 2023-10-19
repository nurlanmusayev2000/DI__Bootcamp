const express = require('express');
const app = express();
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'Mn1475369',
        database: 'postgres',
        port: 5432
    }
});

app.get("/books", (req, res) => {
    knex("books").select().then((val) => {
        console.log(val);
        res.send(val)
    }).catch((err) => {
        res.send(err.message)
    })
});
app.get("/books/:id", (req, res) => {
    const id = Number(req.params.id);
    knex("posts").select().where({ id: id }).then((val) => {
        res.send(val)
    }).catch((err) => {
        res.send(err)
    })
})
app.listen(5000)