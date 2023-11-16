const axios = require('axios');

const fetchPosts = async() => {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
        return res.data
    })
}

export default fetchPosts