const express = require("express");

const postController = require('../controllers/postController');

const chechAuth = require('../middleware/check-auth');
const extractFile = require('../middleware/file');

const router = express.Router();




//create new post
router.post("", chechAuth, extractFile, postController.createPost);

//update post
router.put("/:id", chechAuth, extractFile, postController.updatePost);

//get all posts
router.get('', postController.getPosts);

//get one post
router.get('/:id', postController.getOnePost);

//delete post
router.delete('/:id', chechAuth, postController.deletePost);
module.exports = router;
 
