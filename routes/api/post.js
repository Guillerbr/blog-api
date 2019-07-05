const express = require('express');
const router = express.router();
const Post = require('../../models/Post');

router.get('/', (req, res, next) => {
    Post.find()
        .then((posts) => {
            res.json(posts);

        })
        .catch(err => console.log(err))
});

module.exports = router;

