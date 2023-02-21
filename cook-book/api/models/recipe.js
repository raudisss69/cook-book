const mongoose = require('mongoose')

const Recipe = mongoose.Schema({
  title:{
      type: String,
      required: true
  },
  listIngredients:{
      type: Array,
      required: true
  },
  method:{
      type: String,
      required: true
  },
  time:{
      type: Number,
      required: true
  }
});

module.exports = mongoose.model('Recipes', Recipe);