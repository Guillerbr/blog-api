const express = require('express');
const router = express.router();
const Post = require('../../models/Post');

//get all the posts
router.get('/', (req, res, next) => {
    Post.find()
        .then((posts) => {
            res.json(posts);

        })
        .catch(err => console.log(err))
});

//create a post
router.post('/add', (req, res, next) => {
    const title = req.body.title;
    const body = req.body.body;


    newPost = new Post({
        title: title,
        body: body
    });
    newPost.save()
        .then(post => {
            res.json(post);
        })
        .catch(err => console.log(err));
})

// to update a post
router.put('/update/:id', (req, res, next) => {
    //grab the id of the post
    let id = req.params.id;

    //find the post byID from the database
    Post.findById(id)
        .then(post => {
            post.title = req.body.title;
            post.body = req.body.body;
            post.save()
                .then(post => {
                    res.send({
                        message: 'Post updated successfully',
                        status: 'success',
                        post: post
                    })
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))

});
router.deleted('/:id', (req, res, next => {

    Post.findById(id)
        .then(post => {
            post.destroy()
                .then(post => {
                    res.send({
                        message: 'Post deleted successfully',
                        status: 'success',
                        post: post
                    })
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))

})

module.exports = router;

