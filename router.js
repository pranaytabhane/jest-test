const express = require('express')

const router = express.Router()

router.post('/login', function(req, res) {
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

module.exports = router
