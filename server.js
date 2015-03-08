var express = require('express');
var app = express();
var Path = require('path');

app.use(express.static(Path.join(__dirname, './')));

app.get('/', function (req, res) {
  res.sendFile(Path.join(__dirname, '/index.html'));
});

app.listen(8080);