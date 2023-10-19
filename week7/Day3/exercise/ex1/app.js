const express = require('express');
const route = require('./routes/index.js')


const app = express();


app.listen(3003, () => {
    console.log('server is running');
})

app.use(express.json())
app.use('/', route)