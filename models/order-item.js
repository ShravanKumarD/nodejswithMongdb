const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const OrderItem =  new Schema({
  id: {
    type: Number,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity:  {
    type: Number
  }
});

module.exports = OrderItem;
