const express = require('express');
const app = express();
const fruits = require('./models/fruits.js')

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine())

// Index Route
app.get('/fruits', (req, res) => {
  res.render('Index', { fruits: fruits })
});

// Show Route
app.get('/fruits/:index', (req, res) => {
  res.render('Show', {
    fruit: fruits[req.params.index]
  })
})

app.listen(3000, () => {
  console.log('listening!');
});