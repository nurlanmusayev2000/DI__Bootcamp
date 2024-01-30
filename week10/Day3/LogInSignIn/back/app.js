const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const bp = require('body-parser');
const cors = require('cors')
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'Mn1475369',
        database: 'registrationdatas',
        port: 5432
    }
});
app.use(cors())
app.use(bp.json())
app.use(express.json())
app.get('/table', async(req, res) => {
    const table = await knex.select().from('users')
    const tableJSON = JSON.stringify(table)
    res.send({ message: "hello", data: tableJSON });
})

app.post('/register', async(req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password);
        const hashedpassword = await bcrypt.hash(password, 12);
        await knex('users').insert({ name, email });
        await knex('login').insert({ hashedpassword, email })

        res.send({ message: "you signed succesfully" })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'email is validit' });
    }

})


app.post('/login', async(req, res) => {
    try {
        const { email, password } = req.body;
        const getUserPass = await knex.select('hashedpassword').from('login').where({ email })
        console.log(getUserPass[0].hashedpassword);
        const hashedPasswordFromDB = getUserPass[0].hashedpassword;

        const checkUserExist = bcrypt.compareSync(password, hashedPasswordFromDB)
        console.log(checkUserExist);

        if (checkUserExist) {
            res.status(200).json({ message: "you signed in succesfully" })
        } else {
            // Passwords do not match, authentication failed
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'email or password is not correct' });

    }


})


app.listen(3005, () => {
    console.log("server is listening");
})