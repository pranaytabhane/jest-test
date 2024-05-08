const app = require('../app')
const port = 3005

app.listen(port, (err, result) => {
    if (err) throw err;
    console.log(`Running on port ${port}`);
})