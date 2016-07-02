
var express = require('express');
var morgan = require('morgan');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));     //serve static assets
app.use(morgan('combined'));


app.get('/', function(req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.get('/login', function(req, res) {
    res.sendfile('./public/login.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(port, function() {
    console.log('Listening on ' + port);
});