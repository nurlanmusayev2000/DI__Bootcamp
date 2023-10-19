const express = require('express');
const app = express();
const router = require('./routes.js');

// bodyParser burada elave et ki her route ucun aid olsun

app.use('/', router);

app.listen(3007, () => {
    console.log("servere is listening");
})