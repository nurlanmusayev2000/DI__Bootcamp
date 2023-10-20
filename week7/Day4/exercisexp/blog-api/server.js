const express = require('express');
const bp = require('body-parser')
const app = express();

const {
    getPosts,
    getPost,
    createPost,
    updatePost,
    delPost
} = require('./controller.js')
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());




app.get('/posts', getPosts)
app.get('/posts/:id', getPost)

app.post('/posts', createPost)
app.put('/posts/:id', updatePost);



app.delete('/posts/:id', delPost)


app.listen(2000, () => {
    console.log("done");
})