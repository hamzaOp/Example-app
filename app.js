require('dotenv').config();
var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var server = http.createServer();
var server = http.Server(app);
var io = require('forecast.io.live')(server, process.env.API_KEY);


app.use(express.static(path.join(__dirname,'public')));

server.listen(process.env.PORT, function(){
    console.log("listening.....");
})
