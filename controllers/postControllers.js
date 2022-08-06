const Blog = require('../models/Blog');

exports.getAllPosts = async (req, res) => {

    const blog = await Blog.find({}).sort('-dateCreated');
    res.render('index', {
      blog
    });  
  }

  exports.getPost = async (req, res) => {

    const post = await Blog.findById(req.params.id);
    res.render('post', {
      post
    })  
  }

  exports.createPost = async (req, res)=>{

    await Blog.create(req.body);
    res.redirect('/');

  }

  exports.updatePost = async (req, res) => {
  
    const post = await Blog.findById(req.params.id );
    
    post.title = req.body.title;
    post.content = req.body.content;
    await post.save();
    res.redirect(`/post/${req.params.id}`);

  }

  exports.deletePost = async (req, res) => {
  
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect(`/`);

  }