//for schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    bodys: {
        type: String,
        required: true
    }
}, { timestamps: true });//set authomatic time stamps

//create a model base n the schema, it takes in two argument the db name and the schema
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;