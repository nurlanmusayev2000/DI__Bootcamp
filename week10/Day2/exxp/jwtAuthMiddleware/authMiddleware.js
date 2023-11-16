const jwt = require('jsonwebtoken');
const cookieparser = require('cookie-parser')
const secretkey = "adminacceskey"

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "token not found" })
    }

    jwt.verify(token, secretkey, (err, user) => {
        if (err) {
            return err.message
        }

        // const newToken = jwt.sign({ id: user.id, username: user.username }, secretkey, {
        //     expiresIn: '1h', // New access token expires in 1 hour
        // });

        // !!! verify olunduqda yeni token yaranmir movcud olan tokeni yoxlayiriq

        // res.cookie('token', newToken, { httpOnly: true });
        req.user = user;
        next();
    })
}


module.exports = authMiddleware