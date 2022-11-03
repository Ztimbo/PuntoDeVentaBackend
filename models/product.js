'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

const productSchema = schema({
    name: String,
    description: String,
    priceBuy: Number,
    priceSell: Number,
    provider: { type: schema.Types.ObjectId, ref: 'Provider' },
    brand: { type: schema.Types.ObjectId, ref: 'Brand' },
    category: { type: schema.Types.ObjectId, ref: 'Category' },
    presentation: { type: schema.Types.ObjectId, ref: 'Presentation' },
    quantity: String,
    barCode: String
});

module.exports = mongoose.model('Product', productSchema);