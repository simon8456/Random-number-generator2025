const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

let clickCount = 0;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Send the main HTML file on a GET request to the root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint to get the current click count
app.get('/click-count', (req, res) => {
    res.json({ count: clickCount });
});

// Endpoint to increment the click count
app.post('/increment-click', (req, res) => {
    clickCount++;
    res.json({ count: clickCount });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
