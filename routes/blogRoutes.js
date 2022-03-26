const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

//posting on the index page
router.post('/', blogController.blog_create_post);

//getting from the db to render on the index page
router.get('/', blogController.blog_index);

//creating blog from db
router.get('/create', blogController.blog_create_get);

//getting bt id
router.get('/:id', blogController.blog_deatailsByID);

//delete
router.delete('/:id', blogController.blog_delete)

module.exports = router;
