const express = require('express');
const app = express();
require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'Mn1475369',
        database: 'postgres',
        port: 5432
    }
});

app.post('/register', (req, res) => {

})

knex.transaction((trx) => {

})