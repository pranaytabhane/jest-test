const express = require('express')
const app = express()

app.use(express.json())

app.post('/login', function(req, res) {
    const { username, password } = req.body;
    // Check if username and password are valid (dummy example)
    if (username === 'user' && password === 'password') {
        // Return success message or user object
        res.status(200).json({ message: 'Login successful', user: { username } });
    } else {
        // Return error message for invalid credentials
        res.status(401).json({ message: 'Invalid username or password' });
    }
})

// Middleware to handle not found URLs
app.use(function(req, res, next) {
    res.status(404).send("Sorry, the requested resource was not found.");
});

module.exports = app;