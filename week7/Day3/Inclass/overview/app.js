const express = require('express')
const app = express();
const indexRouter = require('./routes/index.js');
app.get('/1route', (req, res) => {
    res.send('hello')
})
app.use((req, res, next) => {
    console.log(Date());
    let date = Date()
    res.send(date);
    next()
});
app.get('/2route', (req, res) => {
    res.send('Helloooooo2')

})
app.listen(3002, () => {
    console.log("server is listening");
})