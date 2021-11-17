require('dotenv').config();
const express = require('express');
const app = express();

// Specifies default folder for looking for files
app.use(express.static('client'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

const port = process.env.PORT || process.env.SERVER_PORT;

app.listen(port, () => console.log(`Bippity boppity your server is poppity on port: ${port}`));