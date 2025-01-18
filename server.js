const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const db = new sqlite3.Database(':memory:');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create table
db.run('CREATE TABLE numbers (id INTEGER PRIMARY KEY, value INTEGER)', (err) => {
    if (err) {
        console.error('Error creating table:', err.message);
    }
});

// Endpoint: Add number
app.post('/add-number', (req, res) => {
    const { number } = req.body;
    db.run('INSERT INTO numbers (value) VALUES (?)', [number], function (err) {
        if (err) {
            return res.status(500).send('Error saving number');
        }
        res.send({ id: this.lastID, value: number });
    });
});

// Endpoint: Get all numbers
app.get('/numbers', (req, res) => {
    db.all('SELECT * FROM numbers', [], (err, rows) => {
        if (err) {
            return res.status(500).send('Error retrieving numbers');
        }
        res.send(rows);
    });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
