const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
    let names = ['Robert', 'Jack', 'David'];
    res.render('page.ejs', {names: names, subject: 'Lorem ipsum'});
});

app.listen(port, () => console.log(`listening on port ${port}!`));
