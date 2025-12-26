const express = require('express');

const port = 9000;

const cookieParser = require('cookie-parser');

const path = require('path');

const app = express();

const connectDB = require('./config/db');

connectDB();
app.use(cookieParser());


const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

const movieRoutes = require('./routes/movieRoutes');

app.set('view engine', 'ejs');

app.use(express.urlencoded());

app.use(express.static("public"));

app.use('/movies',movieRoutes);
app.use(authRoutes);
app.use(dashboardRoutes);

// app.get('/',(req,res) => {
//     res.redirect("/movies");
// })

app.get('/', (req, res) => {
    if (!req.cookies.userId) {
        return res.redirect('/login');
    }

    if (req.cookies.role === 'admin') {
        return res.redirect('/adminDashboard');
    }

    return res.redirect('/userDashboard');
});


app.listen(port,(err) => {
    if(err){
        console.log("Error to Start Server..");
    }
    console.log("Server Running on port http://localhost:9000");
})