const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');


const app = express();

mongoose.connect("mongodb+srv://ceka:xeb4LyrLOqcxm0d9@cluster0.rmj0j.mongodb.net/node-angular?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to db");
    })
    .catch(() => {
        console.log("Connected Failed");
    })

//xeb4LyrLOqcxm0d9 

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});

app.use("/api/posts", postsRoutes);



module.exports = app;