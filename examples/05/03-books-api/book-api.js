const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.static('public'));


// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/new-book', (req, res) => {
    res.sendFile(__dirname + '/public/new-book.html');
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.post('/book', (req, res) => {
    const book = req.body;

    // Output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
