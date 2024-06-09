const mongoose = require('mongoose');

const photographerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
});

const Photographer = mongoose.model('Photographer', photographerSchema);

module.exports = Photographer;
