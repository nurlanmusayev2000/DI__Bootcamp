const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieparser = require('cookie-parser');


const router = express.Router();
const secretkey = "adminacceskey"
const users = [];

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    const existUser = users.find(user => username === user.username);
    if (existUser) {
        return res.status(409).json({ message: "username already exists" })
    }

    const hashedPass = bcrypt.hashSync(password, 12);

    const newUser = { id: users.length + 1, username, password: hashedPass };
    users.push(newUser);

    const token = jwt.sign({ id: newUser.id, username: newUser.username }, secretkey, {
        expiresIn: '1h'
    })

    res.cookie('token', token, { httpOnly: true });
    res.status(201).json({ message: "successfully registered" })


})


router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const isUserAvailable = users.find(user => user.username == username);
    if (!isUserAvailable || !bcrypt.compareSync(password, isUserAvailable.password)) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: isUserAvailable.id, username: isUserAvailable.username }, secretkey, {
        expiresIn: '1h'
    })

    res.cookie('token', token, { httpOnly: true })
    res.status(201).json({ message: "successfully loggedIn" })

})


module.exports = router