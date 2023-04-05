// REQUIRE STATEMENTS
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// SETTING THE VIEW ENGINE
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

// MONGOOSE CONNECTION STUFF
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
  console.log('connected to mongo!');
});

// MIDDLEWARE
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }))



// LISTEN
app.listen(3000, () => {
  console.log('listening on port 3000');
})