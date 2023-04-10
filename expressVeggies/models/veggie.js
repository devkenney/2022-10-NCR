const { Schema, model } = require('mongoose');

const veggiesSchema = new Schema({
  name: String,
  color: String,
  readyToEat: Boolean,
  username: String
});

const Veggie = model('Veggie', veggiesSchema);

module.exports = Veggie;