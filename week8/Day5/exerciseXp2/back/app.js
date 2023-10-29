const express = require('express');
var cors = require('cors')
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'Mn1475369',
        database: 'users',
        port: 5432
    }
});


const app = express();

app.use(express.json())

app.use(cors())


app.get('/mylist', (req, res) => {
    knex('todolist').select().then((val) => {
        res.send(val)
    })

})
app.post('/mylist', (req, res) => {
    knex('todolist').insert({ list: req.body.list }).then((result) => {
        res.send("request ok")
    })
})


app.delete('/mylist/:id', function(req, res) {

    var id = req.params.id;

    knex('todolist').delete().where({ "id": id }).then((result) => {
        res.send(`data is deleted`)
    })

    return res.status(200);
})


app.listen(5004, () => {
    console.log("server is running");
});