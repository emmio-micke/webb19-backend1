const express = require('express');
const app = express();
const path = require('path');

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/html/index.html'));
});

app.get('/handle-data', function (request, response) {
        let data = '<strong>name:</strong> ' + request.query.name + '<br>';
        data += '<strong>age:</strong> ' + request.query.age + '<br>';
        data += '<strong>color:</strong> ' + request.query.color + '<br>';

        response.send(data);
    });

app.listen(3000);
