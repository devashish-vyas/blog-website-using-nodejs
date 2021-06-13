const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const blogSchema= new Schema({ // schema is thing which defines the structure of our document
    title :{
        type: String,
        require :true
    },
    snippet: {
        type : String,
        require : true
    },
    body: {
        type :String,
        require: true
    }
},{timestamps : true});

//now we have to create model

const Blog=mongoose.model('Blog',blogSchema);//its gonna pluralize the name inside the model search for it in the database
module.exports = Blog;