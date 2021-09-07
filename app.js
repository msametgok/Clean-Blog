const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const methodOverride = require('method-override');

const Post = require('./models/Post');
const pageController = require('./controller/pageController');
const postController = require('./controller/postController')

const app = express();

// conenct db
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Template Engine
app.set("view engine", "ejs");

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method', {
    methods:['GET','POST']
}))

//Routes
app.get('/', postController.getAllPosts)
app.post('/posts', postController.createPost)
app.put('/posts/:id', postController.updatePost)
app.delete('/posts/:id', postController.deletePost)

app.get('/posts/:id', pageController.getPostPage)
app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPage)
app.get('/posts/edit/:id', pageController.getEditPage)

const port = 5000;
app.listen(port, () => {
    console.log(`Server ${port} numaralı portta çalışmaya başladı`);
})