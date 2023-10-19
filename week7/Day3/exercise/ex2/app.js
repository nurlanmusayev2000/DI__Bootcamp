const express = require('express');
const router = require('./routes/todos.js');

const app = express();


app.listen(3005, () => {
    console.log("server is listening");
});
app.use(express.json())
app.use('/todos', router)