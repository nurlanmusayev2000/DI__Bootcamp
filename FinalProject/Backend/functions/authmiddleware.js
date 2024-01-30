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
    let refreshT = req.headers.refreshtoken

    if (token != 'null') {

        jwt.verify(token, secretKey, (err, user) => {
            if (err) {

                if (refreshT == null) {
                    return res.status(403).json({ message: 'Token verification failed' });
                }
                console.log(refreshT);
                // Attempt to refresh the access token using the refresh token
                jwt.verify(refreshT, secretKey, (err, user) => {
                    if (err) {
                        return res.status(403).json({ message: 'Refresh token verification failed' });
                    }

                    // Generate a new access token
                    const newAccessToken = jwt.sign({ id: user.id, username: user.username }, secretKey, {
                        expiresIn: '1h', // New access token expires in 1 hour
                    });
                    req.newtoken = newAccessToken;
                    // Attach the user information to the request
                    req.user = user;
                    return next();
                });
            } else {
                req.user = user;
                next();
            }
        });

    } else {
        res.status(401).json({ message: 'no authorization headers found' })
    }
};

async function dateMiddleWare(req, res, next) {
    console.log('from front', req.body.data);
    const date = req.body.data.date
    const now = new Date()
    const day = now.toLocaleDateString()
    const month = now.getMonth()
    const week = now.getDate()
    const products = await knex('products').select();
    const pastDayProducts = []
    const pastWeekProducts = []
    const pastMonthProducts = []
    products.forEach(item => {
        const dateChange = item.product_date.toLocaleDateString();
        const monthChange = item.product_date.getMonth();
        const weekChange = item.product_date.getDate();

        if (dateChange === day) {
            console.log('past day');
            pastDayProducts.push(item)
        } else if (Math.abs(monthChange - month) <= 1) {
            console.log('pastMonth');
            pastMonthProducts.push(item)

            if (Math.abs(weekChange - week) <= 7) {

                console.log('pastweek');
                pastWeekProducts.push(item)

            }
        }
    })
    if (date == 0) {
        req.productForDate = pastDayProducts;
        next()
    } else if (date == 1) {
        req.productForDate = pastWeekProducts;
        next()
    } else if (date == 2) {
        req.productForDate = pastMonthProducts;
        next()
    } else {
        res.send = 'no product has found';
        next()
    }
}

module.exports = { authenticateJWT, dateMiddleWare }