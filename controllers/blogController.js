const Blog = require('../models/blog');
//controller is to connect models(db) and the view(html template) in the router file
//blog_index, blog_deatailsByID, blog_create_get, blog_create_post, blog_delete

const blog_index = ((req, res) => {
    Blog.find().sort({ createdat: -1 })
    .then((result) => {
        res.render('blogs/index', { title: 'All Blogs', blogs: result })
    })
    .catch((err) => {
        console.log(err)
    });
})

const blog_deatailsByID = ((req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then((result) => {
        res.render('blogs/details', { blog: result, title: 'Blog Details' });
    })
    .catch((err) => {
        res.render('404', { title: 'Blog not found' })
    });
})

const blog_create_get = ((req,res) => {
    res.render('blogs/create', { title: 'Create new Blog' });
})

const blog_create_post = ((req, res) => {
    const blog = new Blog(req.body)

    blog.save()
    .then((result) => {
        console.log(result)
        res.redirect('/blogs');
    })
    .catch((err) => {
        console.log(err);
    });
})

const blog_delete = ((req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({ redirect: '/blogs' })
    })
    .catch((err) => {
        console.log(err);
    })
})

module.exports = {
    blog_index,
    blog_deatailsByID,
    blog_create_get,
    blog_create_post,
    blog_delete
}