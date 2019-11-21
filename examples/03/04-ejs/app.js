const express = require('express');
const app = express();
const port = 3000;

app.get('/instructor/:name', function (request, response) {
    response.render('teacher.ejs', {instructor: request.params.name});
});

app.listen(port, () => console.log(`listening on port ${port}!`));
