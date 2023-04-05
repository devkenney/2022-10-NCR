// REQUIRE STATEMENTS
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const db = mongoose.connection;

// SETTING THE VIEW ENGINE
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

// MONGOOSE CONNECTION STUFF
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
db.on('error', err => console.log(err.message + ' is mongod not running?'));
db.on('open', () => console.log('mongo connected: ', mongoURI));
db.on('close', () => console.log('mongo disconnected!'))

// MIDDLEWARE
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }))

const veggieController = require('./controllers/veggies');
app.use('/veggies', veggieController)

// LISTEN
app.listen(3000, () => {
  console.log('listening on port 3000');
})