/**
 * Created by ankur on 1/3/17.
 */

var express = require('express');
var app = express();                // this is used for server start
var mongoose = require('mongoose'); // this is used for contenting to mongo db
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan'); // this is used for checking the error. specially in angular js
var fs = require('fs');   // this is used for file system ..All the information related to files..
var path = require('path');

app.use(express.static(__dirname + '/client'));

app.get('/',function(req,res){
    res.sendfile(__dirname+'/client/index.html');
})


app.listen(7000, function () {         //app.listen takes 2 parameter one is port number & second is function
    console.log ("welcome");
});


exports = module.exports = app;