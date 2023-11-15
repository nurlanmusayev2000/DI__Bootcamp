let express = require('express');

const bodyParser = require('body-parser');


let app = express()
app.use(bodyParser.json());


app.listen(3001, () => {
    console.log('server was listened succesfully');
})

const data = [{
        id: '1',
        title: 'agar.io',
        content: 'game'
    },
    {
        id: '2',
        title: 'slither.io',
        content: 'game'
    },
    {
        id: '3',
        title: 'tetris',
        content: 'game'
    },
    {
        id: '4',
        title: 'snake',
        content: 'game'
    }
]

app.get('/posts', (req, res) => {
    res.json(data)
})

app.get('/posts/:id', (req, res) => {
    let id = Number(req.params.id);
    let post = data.find((val) => val.id == id);
    if (!post) {
        return res.status(404).send('data not found')
    }
    res.json(post)

})

/* app.use(express.json());
app.post('/posts', (req, res) => {
    const newPost = {
        id: req.body.id,
        title: req.body.title,
        content: req.body.content
    }
    console.log(newPost);
    console.log(req.body);
    data.push(newPost);
    res.status(201).json(newPost)
}) */

// parse json body content


app.post("/products", (req, res) => {
    const newProduct = {
        "id": data.length + 1,
        "title": req.body.title,
        "content": req.body.content
    };
    console.log(req);
    data.push(newProduct);
    res.json(newProduct);
});



app.put('/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    console.log(id);
    const index = data.findIndex((val) => {
        console.log(val.id);
        return val.id == id
    })
    console.log(index);
    if (index == -1) {
        return res.status(404).send("Product not found");
    }
    const updatePost = {
        id: data[index].id,
        title: req.body.title,
        content: req.body.content
    }
    data[index] = updatePost;
    res.json(updatePost)
})

app.delete('/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = data.findIndex((val) => {
        return val.id == id
    })
    const newData = data.splice(index, 1)
    res.json(newData)

})