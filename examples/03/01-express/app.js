/*jslint devel: true */
/*jslint es6 */
/*jslint node: true */
/*global console */
'use strict';

const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (request, response) {
    response.send("Hello World!");
});

// Request comes in to /color/ANYTHING
app.get('/age/:user_age', function (request, response) {
    let answer = request.params.user_age;

    if (Number(answer) >= 20) {
        response.send('At least 20.');
    } else {
        response.send('Under 20.');
    }
});

app.listen(port, () => console.log(`listening on port ${port}!`));
