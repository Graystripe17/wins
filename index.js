
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.use(express.static('public'));

// Templates
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(request, response) {
    response.send('hello world!');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on part', app.get('port'));
});




