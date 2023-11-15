const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();

// Sample user data (replace with a database in a real application)
const users = [];

// Secret key for JWT signing (replace with a more secure secret)
const secretKey = 'mysecretkey';

// Middleware for parsing JSON requests
router.use(bodyParser.json());
router.use(cookieParser());

// Endpoint for user registration
router.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Check if the username is already taken
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
        return res.status(409).json({ message: 'Username already exists' });
    }

    // Hash the password before storing it
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create a new user
    const newUser = { id: users.length + 1, username, password: hashedPassword };
    users.push(newUser);

    // Generate a JWT for the new user
    const token = jwt.sign({ id: newUser.id, username: newUser.username }, secretKey, {
        expiresIn: '1h', // Token expires in 1 hour
    });

    // Set the JWT as an HTTP cookie
    res.cookie('token', token, { httpOnly: true });
    res.status(201).json({ message: 'User registered successfully' });
});

// Endpoint for user login
// auth.js

// ...

// Endpoint for user login
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find the user with the given username
    const user = users.find((u) => u.username === username);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate an access token for the authenticated user
    const accessToken = jwt.sign({ id: user.id, username: user.username }, secretKey, {
        expiresIn: '1h', // Token expires in 1 hour
    });

    // Generate a refresh token with a longer expiration time
    const refreshToken = jwt.sign({ id: user.id, username: user.username }, secretKey, {
        expiresIn: '7d', // Refresh token expires in 7 days
    });

    // Set the access token as an HTTP cookie
    res.cookie('token', accessToken, { httpOnly: true });

    // Set the refresh token as an HTTP cookie
    res.cookie('refreshToken', refreshToken, { httpOnly: true });

    res.status(200).json({ message: 'Login successful' });
});

router.post('/logout', (req, res) => {
    // Clear the JWT cookie
    res.clearCookie('token');
    res.status(200).json({ message: 'Logout successful' });
});

router.post('/refresh', (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        return res.status(401).json({ message: 'Refresh token not found' });
    }

    jwt.verify(refreshToken, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Refresh token verification failed' });
        }

        // Generate a new access token
        const accessToken = jwt.sign({ id: user.id, username: user.username }, secretKey, {
            expiresIn: '1h', // New access token expires in 1 hour
        });

        // Set the new access token as an HTTP cookie
        res.cookie('token', accessToken, { httpOnly: true });

        res.status(200).json({ message: 'Token refreshed successfully' });
    });
});
module.exports = router;