const express = require('express');
const app = express();
const port = 8000; 


app.use(express.static('.'));

app.get('/', (req, res) => {
    res.redirect('/login.html');  
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
