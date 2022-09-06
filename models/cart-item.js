const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CartItem =  new Schema({
  id: {
    type: Number
  },
  quantity :{ 
     type:Number
    }
});

module.exports = CartItem;
