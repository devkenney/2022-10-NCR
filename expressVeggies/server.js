// REQUIRE STATEMENTS
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');
const db = mongoose.connection;
const session = require('express-session');
const MongoStore = require('connect-mongo');

// SETTING THE VIEW ENGINE
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

// MONGOOSE CONNECTION STUFF
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
db.on('error', err => console.log(err.message + ' is mongod not running?'));
db.on('open', () => console.log('mongo connected'));
db.on('close', () => console.log('mongo disconnected!'));

// MIDDLEWARE
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))

app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    saveUninitialized: true,
    resave: false
  })
)

app.get('/', (req, res) => {
  res.render('Home.jsx');
});

const veggieController = require('./controllers/veggies');
app.use('/veggies', veggieController)

const userController = require('./controllers/users');
app.use('/users', userController);

// LISTEN
app.listen(3000, () => {
  console.log('listening on port 3000');
});