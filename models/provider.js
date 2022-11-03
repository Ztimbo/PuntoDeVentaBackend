'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

const providerSchema = schema({
    name: String,
    description: String,
    phonenUmber: Number,
    email: String
});

module.exports = mongoose.model('Provider', providerSchema);