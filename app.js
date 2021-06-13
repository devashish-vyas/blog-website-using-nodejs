const express=require('express');

const app=express();
const morgan=require('morgan');
const mongoose=require('mongoose');
const Blog= require('./models/blog');
app.use(express.urlencoded({ extended: true }));
const dbURI='mongodb+srv://netninja:test1234@cluster0.t7ry8.mongodb.net/nodejs?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })//asynchronous function 
 .then((result)=>{
     console.log('conneted to db');
     app.listen(3000); //now we will able to listen requests only after connection is complete
 })
  .catch((err)=>{
      console.log(err);
  })

//setting view engine
app.set('view engine','ejs');
//app.set('views','views')
//to tell where to look for views template default value is 
//views only so for this project we do not need this command

// app.use((req,res,next)=>{
//     console.log('new request made');
//     console.log('host: ',req.hostname);
//     console.log('path: ',req.path);
//     console.log('method: ',req.method);
//     //after executing this code you will see browser hangs because express doen not 
//     //not know where to go after this middleware request so we have to use next function 
//     //to tackle this issue
//     next();

// });
 // routes for demostration of mongoose and mongodb
// app.get('/add-blog',(req,res)=>{
//     const blog=new Blog({
//         title:'new Blog 2',
//         snippet : 'about my new Blog 2',
//         body : 'more about my new Blog 2'
//     });

//     blog.save()//asynchronous function
//      .then((result)=>{
//         res.send(result);
//      })
//      .catch((err)=>{
//          res.send(err);
//      });
     
// });

// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//      .then((result)=>{
//          res.send(result);
//      })
//       .catch((err)=>{
//           console.log(err);
//       })
// });

// app.get('/single-blog',(req,res)=>{
//   Blog.findById('60c4e969ce516709443ec4c7')
//    .then((result)=>{
//        res.send(result);
//    })
//    .catch((err)=>{
//        console.log(err)
//    })
// });

//app.use(morgan('dev'));

//middleware static

app.use(express.static('public'));

app.get('/',(req,res)=>{

    //res.send('<p> Hello World </p>');
    //res.sendFile('./views/home.html',{root:__dirname});//root dirname is added beause the path the function require is absolute path but 
    //we are passing a relative path so we have to specify the root directory
    
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //   ];
    // res.render('index',{title : 'Home',blogs:blogs}); // express look into the views folder autimaticlly
    res.redirect('blogs');
});

// app.use((req,res,next)=>{
//     console.log('in the next middleware');
//     next();
// });
app.get('/about/',(req,res)=>{

    
    res.render('about',{title : 'About'});
});

// app.get('/about-us/',(req,res)=>{
//     res.redirect('/about/');
// });

//for blogs

app.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt : -1})//newest to oldest
    .then((result)=>{
        res.render('index',{title:'All Blogs', blogs:result });
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.post('/blogs',(req,res)=>{
    const blog=new Blog(req.body);
    blog.save()
     .then((result)=>{
         res.redirect('/');
     })
     .catch((err)=>{
         console.log(err);
     })
    
})

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title : 'Create a new blog'});
})


app.get('/blogs/:id', (req,res)=>{
    const id=req.params.id;
    Blog.findById(id)
     .then((result)=>{
         res.render('details',{blog : result, title: 'Blog-Details'})
     })
})
//part of a route which is changeable is called route parameter




app.use((req,res)=>{

    res.status(404).render('404',{title : '404'});
})