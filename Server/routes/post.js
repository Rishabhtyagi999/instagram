const express = require('express');
const { model } = require('mongoose');
const router = express.Router()
const mongoose = require('mongoose')
const requirelogin = require('../middleware/requirelogin');
const Post = mongoose.model("Post");

router.get('/allpost', (req, res) => {
    Post.find()
        .populate("postedBy", "_id name")
        .then(posts => {
            res.json({ posts })
        })
        .catch(err => {
            console.log(err);
        })
})


router.post('/createpost', requirelogin, (req, res) => {
    const { title, body } = req.body
    if (!title || !body) {
        res.status(422).json({ error: "Please add all the fields" })


    }
    req.user.password = undefined
    const post = new Post({
        title,
        body,
        postedBy: req.user
    })
    post.save().then(result => {
            res.json({ post: result });
        })
        .catch(err => {
            console.log(err);
        })
})

router.get('/mypost', requirelogin, (req, res) => {
    Post.find({ postedBy: req.user })
        .populate("postedBy", "_id name")
        .then(myposts => {
            res.json({ myposts })
        })
        .catch(err => {
            console.log(err)
        })
})


module.exports = router