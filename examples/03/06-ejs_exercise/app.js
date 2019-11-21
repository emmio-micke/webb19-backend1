const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response) {
    response.render('page.ejs');
});

app.post('/count', function(request, response) {
    response.render('count.ejs', {number: request.body.count});
});

app.listen(port, () => console.log(`listening on port ${port}!`));
