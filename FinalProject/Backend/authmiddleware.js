const jwt = require('jsonwebtoken');
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'Mn1475369',
        database: 'ecommerce',
        port: 5432
    }
});
const secretKey = 'mySecretKey';

async function authenticateJWT(req, res, next) {
    const authHeader = req.headers['authorization'];
    let token = authHeader.split(' ')[1];
    console.log(token == 'null');
    console.log(authHeader);
    if (token != 'null') {
        console.log('here?');
        const decoded = jwt.verify(token, secretKey)
        if (decoded) {
            const username = decoded.username;
            const persistedUser = await knex('usersdata').select().where({ 'username': username })
            if (persistedUser.length) {
                console.log('decoded:', decoded);
                req.refer_user = decoded.id;
                req.user = username
                next()
            } else {
                res.json({ message: "user not exists" })
            }
        } else {
            res.status(401).json({ message: 'token is not verified' })
            next()
        }
    } else {
        res.status(401).json({ message: 'no authorization headers found' })
    }
};


module.exports = authenticateJWT