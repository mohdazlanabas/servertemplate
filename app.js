const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const { truncateSync } = require('fs');
const port = 3000;

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.set('layout', './layouts/default')
app.use(expressLayouts)
app.set('view engine', 'ejs')

app.get("/", (req, res) => res.render('index'));
app.get('/intro', (req, res) => {res.render('intro')});

/*
//MONGODB DATABASE
const url = 'mongodb+srv://coderazlan:Test01test@cluster0.tvvh4.mongodb.net/Teachers?retryWrites=true&w=majority';
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(console.log("MongoDB Connected"))
.catch(err => console.log(err))
const database = require('./models/Database')
*/


//SYSTEM

app.get('/visitor', (req, res) => {
    res.render((path.join(__dirname, 'views/system','visitor.ejs')))
  })
  
app.get('/about', (req, res) => {
  res.render((path.join(__dirname, '/views/system','about.ejs')))
})

app.get('/dashboard', (req, res) => {
  res.render((path.join(__dirname, '/views/system','dashboard.ejs')))
})

app.get('/home', (req, res) => {
  res.render((path.join(__dirname, '/views/system','home.ejs')))
})



app.get('/settings', (req, res) => {
// res.send('Databse hidden in port 5000!')
database.find({}, function(err, usernames) {
  res.render((path.join(__dirname, '/views/system','settings.ejs')), {
    userlist: usernames
    })  
  })
})

app.get('/test', (req, res) => {
  res.render((path.join(__dirname, '/views/system','test.ejs')))
}) 

// Get Data Into App
app.get('/sitemap', (req, res) => {
  res.render((path.join(__dirname, '/views/system','sitemap.ejs')))
})

  // STUDENT
  
  app.get('/account', (req, res) => {
    res.render((path.join(__dirname, '/views/student','account.ejs')))
  })
  
  app.get('/class', (req, res) => {
    res.render((path.join(__dirname, '/views/student','class.ejs')))
  })
  
  app.get('/cockpit', (req, res) => {
    res.render((path.join(__dirname, '/views/student','cockpit.ejs')))
  })
  
  app.get('/messaging', (req, res) => {
    res.render((path.join(__dirname, '/views/student','messaging.ejs')))
  })
  
  app.get('/email', (req, res) => {
    res.render((path.join(__dirname, '/views/student','email.ejs')))
  })
  
  
  app.get('/progress', (req, res) => {
    res.render((path.join(__dirname, '/views/student','progress.ejs')))
  })
  
  app.get('/registration', (req, res) => {
    res.render((path.join(__dirname, '/views/student','registration.ejs')))
  })
  
  app.get('/schedule', (req, res) => {
    res.render((path.join(__dirname, '/views/student','schedule.ejs')))
  })
  
  app.get('/account', (req, res) => {
    res.render((path.join(__dirname, '/views/student','account.ejs')))
  })
  
  app.get('/social', (req, res) => {
    res.render((path.join(__dirname, '/views/student','social.ejs')));
    const apiKey = process.env.API_KEY;
  })
  
  app.get('/storage', (req, res) => {
    res.render((path.join(__dirname, '/views/student','storage.ejs')))
  })
  
  app.get('/videos', (req, res) => {
    res.render((path.join(__dirname, '/views/student','videos.ejs')))
  })
  
  app.get('/news', (req, res) => {
    res.render((path.join(__dirname, '/views/student','news.ejs')))
  })
  

app.listen(process.env.PORT || port, () => console.log('Server is Running \n' + `Listening at http://localhost:${port}`));