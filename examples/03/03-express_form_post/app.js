const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/html/index.html'));
});

app.post('/handle-data', function (request, response) {
        let data = '<strong>name:</strong> ' + request.body.name + '<br>';
        data += '<strong>age:</strong> ' + request.body.age + '<br>';
        data += '<strong>color:</strong> ' + request.body.color + '<br>';

        response.send(data);
    });

app.listen(3000);
