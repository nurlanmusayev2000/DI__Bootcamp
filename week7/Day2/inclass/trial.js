const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/profile', (req, res) => {
    res.send("getting profile");
});


app.post('/profile', (req, res) => {
    const user = {
        name: req.body.name,
        hobby: req.body.hobby
    };

    res.send(user);
});


app.listen(3000)