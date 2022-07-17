const express = require('express');
const Blog = require('./models/Blog');
const path = require('path');
const { default: mongoose } = require('mongoose');

const app = express();

//connect-DB
mongoose.connect('mongodb://localhost/clean-blog-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//Template Engine
app.set("view engine","ejs");

//Route
app.get('/', async (req, res) => {

  const blog = await Blog.find({});
  res.render('index', {
    blog
  });

});
app.get('/about', (req, res) => {

    res.render('about');
  
  });
  app.get('/add_post', (req, res) => {

    res.render('add_post');
  
  });
  app.post('/blog', async (req, res)=>{

    await Blog.create(req.body);
    res.redirect('/');

  });



const port = 5000;

app.listen(port, () => {
  console.log(`server ${port} başlatıldı`);
});
