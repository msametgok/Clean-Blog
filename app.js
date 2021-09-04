const express = require('express');
const ejs = require('ejs');
const app = express();

// Template Engine
app.set("view engine", "ejs");

//Middleware
app.use(express.static('public'));

//Routes
app.get('/', (req, res) => {
    res.render('index');
})
app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/posts', (req, res) => {
    res.render('posts');
})
app.get('/add_post', (req, res) => {
    res.render('add_post');
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server ${port} numaralı portta çalışmaya başladı`);
})