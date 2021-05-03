const mongoose = require('mongoose');
const marked = require('marked');
const slugify = require('slugify');


const articleSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    imgurl:{
        type:String,
    },
    description:{
        type:String
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;

