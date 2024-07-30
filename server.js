const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // Using the new port

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Mainpage.html'));
});

// Login route
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Overview route
app.get('/overview', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'overview.html'));
});

// Listen on the configured port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
