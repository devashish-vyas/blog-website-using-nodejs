const express=require('express');

const app=express();

app.listen(3000);
//setting view engine
app.set('view engine','ejs');
//app.set('views','views')
//to tell where to look for views template default value is 
//views only so for this project we do not need this command

app.get('/',(req,res)=>{

    //res.send('<p> Hello World </p>');
    //res.sendFile('./views/home.html',{root:__dirname});//root dirname is added beause the path the function require is absolute path but 
    //we are passing a relative path so we have to specify the root directory
    
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index',{title : 'Home',blogs:blogs}); // express look into the views folder autimaticlly
});

app.get('/about/',(req,res)=>{

    
    res.render('about',{title : 'About'});
});

// app.get('/about-us/',(req,res)=>{
//     res.redirect('/about/');
// });

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title : 'Create a new blog'});
})

app.use((req,res)=>{

    res.status(404).render('404',{title : '404'});
})