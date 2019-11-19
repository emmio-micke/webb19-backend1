var express = require('express');
var app = express();

app.route('/Node')
    .get(function (request, response) {
        response.send("Tutorial on Node");
    })
    .post(function (request, response) {
        response.send("Create post on Node");
    })
    .options(function (request, response) {
        response.send("Something something options on Node");
    })

app.route('/Angular')
    .get(function (request, response) {
        response.send("Tutorial on Angular");
    });

app.get('/', (function (request, response) {
    response.send('Welcome to Webb19 Tutorials');
}));

var server = app.listen(3000,function() {});
