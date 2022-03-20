const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({

  id: Number,
  name: String, 
  description: String,
  price: Number,
  imageUrl: String

})

module.exports = mongoose.model('Products', ProductSchema);