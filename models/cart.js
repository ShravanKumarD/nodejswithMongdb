const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Cart = new Schema({
  id: {
    type: Number,
    autoIncrement: true
  }
});

module.exports = Cart;
