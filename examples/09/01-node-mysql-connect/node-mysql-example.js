var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '192.168.95.100',
    port: '4059',
    user: 'root',
    password: 'root',
    database: 'classicmodels',
    debug: false,
});

connection.connect(function (err) {
    if (err) {
        console.error('Error:- ' + err.stack);
        return;
    }

    console.log('Connected Id:- ' + connection.threadId);
});

connection.end();
