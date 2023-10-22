const express = require('express');
const router = express.Router();
const { getQuestion, postUserDetails, postScore } = require('./controllers.js');


router.get('/question/:id', getQuestion);
router.post('/starting', postUserDetails);
router.post('/starting/score', postScore)
module.exports = router;