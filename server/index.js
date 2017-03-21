var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var api = require('./api');

var clientPath = path.join(__dirname, "../client");

var app = express();
app.use(express.static(clientPath));
app.use(cookieParser());
app.use(bodyParser.json());


app.use('/api', api);

app.listen(3000);
console.log('listening on port 3000');