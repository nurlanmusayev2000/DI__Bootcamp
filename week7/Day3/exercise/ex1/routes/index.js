const express = require('express');
const bodyParther = require('body-parser')
const route = express.Router();
route.use(bodyParther.json())
route.get('/', (req, res) => {
    res.send("welcome to my localhost")
})

route.post('/about', (req, res) => {
    const json = {
        name: req.body.name
    };
    res.send(json);
})









module.exports = route;