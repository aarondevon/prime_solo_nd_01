var express = require('express');
var app = express();

var path = require('path');

app.set('port', (process.env.PORT || 3000));

app.get('/*', function(request, response){
    var file = request.params[0] || 'views/index.html'
});