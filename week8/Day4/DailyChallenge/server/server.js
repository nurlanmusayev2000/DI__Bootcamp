const express = require('express');
const cors = require("cors");
const app = express();
const bp = require("body-parser")
app.use(cors());
app.use(bp.urlencoded())
app.use(bp.json())

app.get("/api/hello", (req, res) => {
    res.send("Hello From express")

})

app.post("/api/world", (req, res) => {

    res.send({
        message: `i recived you message: ${req.body.message}`
    });
})

app.listen(5002, () => {
    console.log("server is running");
})