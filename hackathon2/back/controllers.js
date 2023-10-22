const nodemailer = require('nodemailer');
const sendEmail = (user, userScore) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nurlan.2000.m@gmail.com',
            pass: 'rulnbewrvpytsahn'
        }
    });

    const mailOptions = {
        from: 'nurlan.2000.m@gmail.com',
        to: user,
        subject: 'your score',
        text: `your score is ${userScore}`
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + `your score is ${score}`);
        }
    });
}
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'Mn1475369',
        database: 'project',
        port: 5432
    }
});

let emailOfUser;




const getQuestion = async(req, res) => {
    const id = req.params.id;
    const question = await knex('questions').select();
    const answers = await knex('answers').select("a", "b", "c", "d").where({ id: question[id].id })
    const resultQuestion = question[id].question;
    const correctAnswer = await knex('correctanswer').select("answer").where({ answer_id: question[id].id });
    const allResult = { resultQuestion, answers, correctAnswer };
    console.log("suali getir");
    res.json(allResult)

}

const postUserDetails = async(req, res) => {
    await knex('users').insert({ username: req.body.username, email: req.body.email });
    //  lastuserDetails = await knex('users').select('email', 'id').where({ username: req.body.username });
    console.log("user detallarini gonder");
    emailOfUser = req.body.email
    res.json("ok")
}

const postScore = async(req, res) => {
    const score = await knex('scores').insert({ scores: req.body.score });
    console.log("scoru gonder");
    const scoreOfUsers = await req.body.score
    console.log(scoreOfUsers);
    //  const scoreOfUser = await knex('scores').select("scores").where({ id: lastuserDetails.id });
    sendEmail(emailOfUser, scoreOfUsers)

    res.json('ok')
}

module.exports = { getQuestion, postUserDetails, postScore };