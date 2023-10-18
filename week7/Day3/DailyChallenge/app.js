const express = require('express');
const app = express();
const router = require('./routes.js');


app.use('/', router);

app.listen(3007, () => {
    console.log("servere is listening");
})