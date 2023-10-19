const express = require('express');
const router = express.Router();
const bp = require('body-parser');
router.use(bp.json())
const todos = [{
        id: 1,
        title: "wake up at 7 am",
    },
    {
        id: 2,
        title: "have a breakfast at 7:30 am",
    },
    {
        id: 3,
        title: "be ready for going school at 8 am",
    }
];

router.get('/lists', (req, res) => {
    res.json(todos)
})

router.post('/lists', (req, res) => {

    const newList = {
        id: todos.length + 1,
        title: req.body.title
    }
    console.log(req.body);
    todos.push(newList);
    console.log(todos);
    res.json(todos)

})

router.put('/lists/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = todos.findIndex((value) => {
        return value.id == id;
    })

    // !!! find Index false olduqda -1 gonderir falsy value olmadigi ucun sirf -1 e beraberlik yoxlanilmali
    if (!index) {
        res.send("id is not found")
    }
    todos[index] = {
        id: index + 1,
        title: req.body.title
    }

    res.json(todos[index])
})

router.delete('/lists/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = todos.findIndex((value) => {
        return value.id == id;
    })
// !!! -1
    if (!index) {
        res.send("id is not found")
    }

    todos.splice(index, 1)
    res.status(200).json("Product deleted");
})

//!!! her route da eyni path varsa app.js de umumi qeyd etmek meqsedeuygun

module.exports = router