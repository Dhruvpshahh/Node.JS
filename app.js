const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const { result, reverse } = require('lodash');
const { render } = require('express/lib/response');
const blogRoutes=require('./routes/blogroutes');

//const dbURI ='mongodb+srv://DhruvShah:<password>@nodetuts.yj8bh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const app=express();

const dbURI ='mongodb+srv://DhruvShah:test1234@nodetuts.yj8bh.mongodb.net/Node-Tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser: true,useUnifiedTopology: true})
.then((result)=>  app.listen(3000))
.catch((err)=>console.log(err));
app.set('view engine','ejs');


app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(morgan('dev'));

// app.get('/add-blog',(req,res)=>{
//     const blog = new Blog({
//         title: 'new Blog 2',
//         snippet: 'about my new blog',
//         body : 'more about my new blog'
//     });
//     blog.save()
//     .then((result)=>{
//         res.send(result )
//     }).catch((err)=>{
//         console.log(err);
//     });
// });

// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//     .then((result)=>{
//         res.send(result);
//     }).catch((err)=>{
//         console.log(err);
//     });
// });

// app.get('/single-blog',(req,res)=>{
//     Blog.findById('6233160d9da518a171f6765b')
//     .then((result)=>{
//         res.send(result);
//     }).catch((err)=>{
//         console.log(err);
//     });
// });
// app.use((req,res,next)=>{
//     console.log('New Request made:');
//     console.log('host:', req.hostname);
//     console.log('path:', req.path);
//     console.log('method: ', req.method);
// next();
// });

app.get('/',(req,res)=>{
    res.redirect('/blogs');
});

app.get('/about',(req,res)=>{
   // res.send('<p> About Page</p>');
   res.render('about',{title: ',About'});
});

app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});

app.use(blogRoutes);
app.use((req,res)=>{
    res.status(404).render('404');

});