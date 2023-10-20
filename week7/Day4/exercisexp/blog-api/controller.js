const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'Mn1475369',
        database: 'postgres',
        port: 5432
    }
});

const getPosts = (req, res) => {
    knex('postsss').select().then((val) => {
        console.log(val);
        res.send(val)
    }).catch((err) => {
        res.send(err.message)
    })
};

const getPost = (req, res) => {
    const id = Number(req.params.id);
    knex("posts").select().where({ id: id }).then((val) => {
        res.send(val)
    }).catch((err) => {
        res.send(err)
    })
}

const createPost = (req, res) => {
    console.log(req.body.title);
    knex("posts").insert({ title: req.body.title, content: req.body.content }).then((val) => {
        console.log("downloaded");
        res.send("ok")
    }).catch((err) => {
        res.send(err)
    })
}

const updatePost = (req, res) => {
    const id = req.params.id;
    knex("posts").select().where({ id: id }).update({ title: req.body.title, content: req.body.content }).then((val) => {
        console.log("done");
        res.json(val)
    }).catch((err) => {
        res.send(err)
    });

}

const delPost = (req, res) => {
    const id = req.params.id;
    knex("posts").select().where({ id: id }).del().then((val) => {
        console.log("done");
        res.json("ok")
    }).catch((err) => {
        res.send(err)
    });

}


module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    delPost,

}