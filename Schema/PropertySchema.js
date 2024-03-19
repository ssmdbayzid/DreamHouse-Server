const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rent: {
    type: Number,
    required: true
  },
  postfix: {
    type: String,
    required: true
  },
  propertyType: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  propertyAgent: {
    type: String,
    required: true
  },
  propertyDate: {
    type: String,
    required: true
  },
  bed: {
    type: Number,
    required: true
  },
  kitchen: {
    type: Number,
    required: true
  },
  garage: {
    type: Number,
    required: true
  },
  sqFt: {
    type: Number,
    required: true
  }
});

const Property = mongoose.model('Properties', propertySchema);

module.exports = Property;
