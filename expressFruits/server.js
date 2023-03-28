const express = require('express');
const app = express();
const fruits = require('./models/fruits.js')

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine())

app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
})

app.use(express.urlencoded({extended:false}));

// Index Route
app.get('/fruits', (req, res) => {
  res.render('Index', { fruits: fruits })
});

// New Route
app.get('/fruits/new', (req, res) => {
  res.render('New')
})

// Delete Route

// Update Route

// Create Route
app.post('/fruits', (req, res) => {
  console.log(req.body);
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }

  fruits.push({...req.body});
  res.redirect('/fruits');
})

// Edit Route

// Show Route
app.get('/fruits/:index', (req, res) => {
  res.render('Show', {
    fruit: fruits[req.params.index]
  })
})

app.listen(3000, () => {
  console.log('listening!');
});