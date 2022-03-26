const express = require('express');

//morgan is a middlewear
const morgan = require('morgan');

//mongoose
const mongoose = require('mongoose'); 
const blogRoutes = require('./routes/blogRoutes');
const { result } = require('lodash');
const { render } = require('ejs');
 
//express app
const app = express();

//db connect
const dbURL = 'mongodb+srv://josephine:6hMD6OUhv3bgtiIr@cluster0.mvav0.mongodb.net/blog-note?retryWrites=true&w=majority'
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
//only listen for request if db is connected
.then((result) => app.listen(3000)) 
.catch((err) => console.log(err));

//register view engine 
app.set('view engine', 'ejs');

//middlewear and static files
//middlewear are used to send static files eg style file
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

//creating a middle wear
app.use(morgan('dev'));

//redirecting to index
app.get('/', (req,res) => {
    res.redirect('/blogs')
});

//rending the pages
app.get('/blogs/about', (req,res) => {
    res.render('about', { title: 'About' });
});

//redirection
// app.get('/about-me', (req, res) => {
//     //express redirect
//     res.redirect('./views/about.html');
// });

//blogs render
app.use('/blogs', blogRoutes);


//404 page
//use the use function as default routing because it fires for every single request not throug a directory
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});