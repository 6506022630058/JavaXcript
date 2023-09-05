const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();

const db = new sqlite3.Database('./Database/Book.sqlite');

app.use(express.json());

db.run(`CREATE TABLE IF NOT EXISTS Book (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    title TEXT, 
    author TEXT
)`);

app.get('/books', (req, res) => {
    db.all('SELECT * FROM Book', (err, rows) => {
        if (err) {
            res.status(500).send(err);
        }else{
            res.json(rows);
        }
    });
});

app.get('/books/:id', (req, res) => {

});