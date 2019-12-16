const mysql = require('mysql');
const con = mysql.createConnection({
    host: '192.168.95.100',
    port: '4059',
    user: 'root',
    password: 'root',
    database: 'classicmodels',
    debug: false,
});

con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

/*
const employee = { name: 'Winnie', location: 'Australia' };
con.query('INSERT INTO employees SET ?', employee, (err, res) => {
    if (err) throw err;

    console.log('Last insert ID:', res.insertId);
});
*/

/*
con.query(
    'UPDATE employees SET location = ? Where ID = ?',
    ['South Africa', 5],
    (err, result) => {
        if (err) throw err;

        console.log(`Changed ${result.changedRows} row(s)`);
    }
);
*/

/*
con.query(
    'DELETE FROM employees WHERE id = ?', [5], (err, result) => {
        if (err) throw err;

        console.log(`Deleted ${result.affectedRows} row(s)`);
    }
);
*/

/*
con.query('SELECT * FROM employees', (err, rows) => {
    if (err) throw err;

    console.log('Data received from Db:\n');
    rows.forEach((row) => {
        console.log(`${row.name} is in ${row.location}`);
    });
});
*/

con.query('SELECT o.orderDate, od.productCode ' +
  ' FROM orders o ' +
  '   INNER JOIN orderdetails od ON o.orderNumber = od.orderNumber', (err, rows) => {
    if (err) throw err;

    console.log('Data received from Db:\n');
    rows.forEach((row) => {
        console.log(`${row.orderDate} is in ${row.productCode}`);
    });
});

con.end((err) => {
    // The con is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
});
