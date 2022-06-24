const express = require('express');
const path = require('path');

const app = express();

//Middleware
app.use(express.static('public'));


//Template Engine
app.set("view engine","ejs");

//Route
app.get('/', (req, res) => {

  res.render('index');

});
app.get('/about', (req, res) => {

    res.render('about');
  
  });
  app.get('/add_post', (req, res) => {

    res.render('add_post');
  
  });

const port = 5000;

app.listen(port, () => {
  console.log(`server ${port} başlatıldı`);
});
