const express = require('express');
const router = express.Router();



let router2 = router.get('/2route', (req, res) => {
    res.send('Helloooooo2')

})
module.exports = { router1, router2 };