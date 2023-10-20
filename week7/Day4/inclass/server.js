const exp = require('express');
const bp = require('body-parser');
const DB = require('./modules/db.js')

const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: '5432',
        user: 'postgres',
        password: 'Mn1475369',
        database: 'users'
    }
})

const app = exp();

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.use('/', exp.static(__dirname + '/public'));

app.post('/user', (req, res) => {
    console.log(req.body);
    DB.createUser(req.body)
        .then(data => {
            res.send({ message: 'OK' })
        })
        .catch(err => {
            res.send({ message: err.detail })
        })
})


app.get('/show', (req, res) => {
    db('users')
        .select('username')
        .then(data => {
            console.log(data);
            res.send(data)
        })
        .catch(err => {
            console.log(err);
            res.send({ message: err.detail })
        })
})

app.post('/find', (req, res) => {
    console.log(req.body);
    const { user } = req.body;
    db('users')
        .select('id', 'username')
        .where({ username: user })
        .then(data => {
            console.log(data);
            if (data.length > 0) {
                res.send({ message: `Found=> ${data[0].username} id=> ${data[0].id}` })
            } else {
                res.send({ message: 'Not Found' })
            }
        })
        .catch(err => {
            console.log(err);
            res.send({ message: err.detail })
        })
})



app.listen(3000, () => {
    console.log("server is listening");
})