const express = require('express');
const methodOverride = require('method-override');
const { default: mongoose } = require('mongoose');

const Blog = require('./models/Blog');
const path = require('path');
const postController = require('./controllers/postControllers');
const pageController = require('./controllers/pageControllers');




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
app.use(methodOverride('_method', {
  methods: ['GET', 'POST']
}));


//Template Engine
app.set("view engine","ejs");

//Route
app.get('/', postController.getAllPosts );
app.get('/post/:id', postController.getPost);
app.post('/blog', postController.createPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);


app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPost);



const port = 5000;

app.listen(port, () => {
  console.log(`server ${port} başlatıldı`);
});
