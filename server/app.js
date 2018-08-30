// import files and packages up here
var topSpotsData = require('../server/data.json');
var path = require('path');
// create your express server below
var express = require('express');
var app = express();

// add your routes and middleware below
var morgan = require('morgan');
app.use(morgan('combined'));
app.use(express.static('public'));
app.get('/', (req, res) =>{
    console.log("Page has loaded...");
    res.status(200).send('');
})

app.get('/data', function(req, res){
    res.send(topSpotsData);
});

// finally export the express application
module.exports = app;
