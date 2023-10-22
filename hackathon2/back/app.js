const express = require('express');
const bp = require('body-parser')
const cors = require('cors')
const app = express();
const router_product = require('./routes.js');
app.use(cors());
app.use(bp.json())

app.listen(3010, () => {
    console.log("server is running");;
})

app.use(express.json());
app.use('/app', router_product)