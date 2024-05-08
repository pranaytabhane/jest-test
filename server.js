const express = require('express')
const app = express()
const router = require('./router')
const port = 3005

app.disable('x-powered-by')
// app.use(express.json())
app.use(router)

// Middleware to handle not found URLs
app.use(function(req, res, next) {
    res.status(404).send("Sorry, the requested resource was not found.");
});


const server = app.listen(port, (err, result) => {
    if (err) throw err;
    console.log(`Running on port ${port}`);
})
module.exports = server;