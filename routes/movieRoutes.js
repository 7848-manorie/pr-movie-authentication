const express = require('express');

const route = express.Router();

const multer = require('multer');

const path = require('path');

const { isLogin, isAdmin } = require('../middleware/authMiddleware');


const movieCtl = require('../controller/movieController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,"public/uploads");
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
};

const upload= multer({
    storage : storage,
    fileFilter : fileFilter
});

route.use(express.static('public'));

route.use(express.urlencoded());

// route.get('/', movieCtl.indexPage);
route.get('/', isLogin, movieCtl.indexPage);

route.get('/addMovie',isLogin,isAdmin, movieCtl.createMovieForm);

route.post('/addNewMovie',isLogin,isAdmin,upload.single('poster'), movieCtl.createMovie);

route.get('/viewAllMovie', movieCtl.getAllMovies);

route.get('/movieDetails/:id',isLogin, movieCtl.getMovieDetails);

route.get('/edit/:id',isLogin,isAdmin, movieCtl.editMovieForm);

route.post('/update/:id',isLogin,isAdmin, upload.single('poster'), movieCtl.updateMovie);

route.get('/delete/:id',isLogin,isAdmin, movieCtl.deleteMovie);

module.exports = route;