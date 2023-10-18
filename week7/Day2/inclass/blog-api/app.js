const express = require('express');
const app = express();
const posts = require('./data');
app.listen(5000, () => {
    console.log("server is listening on port 5000");
});

app.get('/api/posts', (req, res) => {
    res.json(posts)
})

app.get('/api/posts/:postID', (req, res) => {
    const id = Number(req.params.postID);
    const post = posts.find((onpost) => onpost.id === id);
    console.log(post);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.json(post);

})