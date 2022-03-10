const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts')
const port = 3000;

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.set('layout', './layouts/default')
app.use(expressLayouts)
app.set('view engine', 'ejs')

app.get("/", (req, res) => res.render('index'));
app.get("/home", (req, res) => res.render('home'));
app.get('/intro', (req, res) => {res.render('intro')});
app.get('/about', (req, res) => {res.render('about')});

app.listen(process.env.PORT || port, () => console.log(`Llistening at http://localhost:${port}`));