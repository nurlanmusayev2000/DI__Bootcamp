const express = require('express');
const router = express.Router();
const bp = require('body-parser')
router.use(bp.json())

const triviaQuestions = [{
        question: "What is the capital of France?",
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars",
    },
    {
        question: "What is the largest mammal in the world?",
        answer: "Blue whale",
    },
    {
        question: "What is the mean of engineer in Azerbaijan language",
        answer: "Muhendis",
    },
];
let i = -1;
let score = 0

router.get('/quiz', (req, res) => {
    if (i < 2) {
        i++;
        console.log(i);
        res.send(triviaQuestions[i].question);
    } else {
        i = -1;

        res.send("You finished the questions your score is " + score);


    }
});
router.get('/quiz/score', (req, res) => {

    res.send("Your  score for now is " + score);



})


router.post('/quiz', (req, res) => {
    console.log(i);
    if (i >= 0 && i < 3) {
        console.log(req.body.answer);
        console.log(triviaQuestions[i].answer)
        if (req.body.answer == triviaQuestions[i].answer) {
            score += 33.33
            console.log("conguratulation you give the correct answer");
            res.send('conguratulation you give the correct answer')
        } else {
            res.send("unfortunately your answer is wrong")
        }
    } else {
        res.send("something went rong")
    }
})
module.exports = router