var express = require('express');
var app =express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var chapter = require('./api/models/chapterModel');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://user:pass@ds129344.mlab.com:29344/chapters');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/chapterRoutes'); //importing route
routes(app); //register the route


app.listen(3000,function(){
	console.log("listning ............");
});

