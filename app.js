const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send('Hello World!'));
app.get("/home", (req, res) => res.send('Home Page!'));

app.listen(process.env.PORT || port, () => console.log(`Llistening at http://localhost:${port}`));