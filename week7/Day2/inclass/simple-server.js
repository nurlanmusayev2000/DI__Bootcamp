const http = require('http');
const { json } = require('stream/consumers');
let server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('<h1>Hello, this is your HomePage!</h1>');
    } else if (req.url == '/about') {
        res.end('<h1>welcome your about page<h1>');

    } else {
        res.writeHead(200, () => {
            "Content-Type",
            "application/json"
        });
        res.end(JSON.stringify({ message: "Welcome New User" }));


    }
});

server.listen(3000, () => {
    console.log('Server is listening at localhost on port 3000');
});