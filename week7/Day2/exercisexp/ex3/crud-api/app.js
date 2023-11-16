const express = require('express');
const axios = require('axios');
const { fetchPosts } = require('./data/dataService')
const app = Express();
app.listen(5002, () => {
    console.log("server is listening");
})


app.get('/fetching/succes', async(req, res) => {
    const posts = await fetchPosts();
    res.json(posts);
    console.log('Data successfully retrieved and sent as a response.');
})