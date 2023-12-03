const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path')
const authMiddleware = require('./authmiddleware')
const products_routes = require('./Router')

const secretKey = 'mySecretKey'

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Update with your frontend origin
    credentials: true,
}));
app.use(express.json());
app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
app.use('/api', products_routes)







app.listen(3005, () => {
    console.log('server is listening on port 3005');
})