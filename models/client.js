const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const ClientModel = mongoose.model('client', ClientSchema);

module.exports = ClientModel;
