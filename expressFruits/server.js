require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Fruit = require('./Models/fruit.js')
const methodOverride = require('method-override');

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine())

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', ()=> {
  console.log('connected to mongo');
});

app.use(methodOverride('_method'));

app.use(express.urlencoded({extended:false}));

// Index Route
app.get('/fruits', (req, res) => {
  Fruit.find({})
    .then(result => {
      res.render('Index', {
        fruits: result
      })
    })
});

// New Route
app.get('/fruits/new', (req, res) => {
  res.render('New')
})

// Delete Route
app.delete('/fruits/:id', (req, res) => {
  Fruit.deleteOne({_id: req.params.id})
    .then(result => {
      res.redirect('/fruits')
    })
    .catch(error => {
      console.error(error)
    })
})

// Update Route
app.put('/fruits/:id', (req, res) => {
  if(req.body.readyToEat === 'on') {
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }

  Fruit.updateOne({_id: req.params.id}, req.body)
    .then(result => {
      console.log(result);
      res.redirect(`/fruits/${req.params.id}`);
    })
    .catch(error => {
      console.error(error)
    })
})

// Create Route
app.post('/fruits', (req, res) => {
  console.log(req.body);
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }

  Fruit.create(req.body)
    .then(result => {
      res.redirect('/fruits')
    })
    .catch(error => {
      res.send("something went wrong!")
    })
})

app.get('/fruits/seed', (req, res) => {
  Fruit.insertMany([
    {
      name: 'grapefruit',
      color: 'pink',
      readyToEat: true
    },
    {
      name: 'grape',
      color: 'purple',
      readyToEat: false
    },
    {
      name: 'avocado',
      color: 'green',
      readyToEat: false
    }
  ])
    .then(result => {
      console.log(result);
      res.redirect('/fruits');
    })
    .catch(error => {
      console.error(error);
    })
})


// Edit Route
app.get('/fruits/:id/edit', (req, res) => {
  Fruit.findOne({_id: req.params.id})
    .then(result => {
      res.render('Edit', {fruit: result})
    })
    .catch(error => {
      console.error(error)
    })
})

// Show Route
app.get('/fruits/:id', (req, res) => {
  Fruit.findOne({_id: req.params.id})
    .then(result => {
      res.render('Show', {
        fruit: result
      })
    })
})

app.listen(3000, () => {
  console.log('listening!');
});