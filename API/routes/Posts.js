const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

//CREATE
router.post('/', async (req, res) => {
	const newPost = new Post(req.body);
	try {
		const createdPost = await newPost.save();
		res.status(200).json(createdPost);
	} catch (err) {
		res.status(500).json('missing username, title or description');
	}
});

// //UPDATE
router.put('/:id', async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post.username === req.body.username) {
			try {
				const updatedPost = await Post.findByIdAndUpdate(
					req.params.id,
					{$set: req.body},
					{new: true}
				);
				res.status(200).json(updatedPost);
			} catch (err) {
				res.status(500).json(err);
			}
		} else {
			res.status(401).json('You can only update your posts!');
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

//DELETE
router.delete('/:id', async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post.username === req.body.username) {
			try {
				await post.delete();
				res.status(200).json('Post deleted...');
			} catch (err) {
				res.status(500).json(err);
			}
		} else {
			res.status(401).json('You can only delete your posts!');
		}
	} catch (err) {
		res.status(404).json(err);
	}
});

//GET POST BY ID
router.get('/:id', async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		res.status(200).json(post);
	} catch (err) {
		res.status(500).json('Post not found');
	}
});
//GET ALL POSTS
router.get('/', async (req, res) => {
	const username = req.query.user;
	const catName = req.query.cat;
	try {
		let posts;
		if (username) {
			posts = await Post.find({username});
		} else if (catName) {
			posts = await Post.find({
				categories: {
					$in: [catName],
				},
			});
		} else {
			posts = await Post.find();
		}
		res.status(200).json(posts);
	} catch (err) {
		res.status(500).json('Post not found');
	}
});

module.exports = router;
