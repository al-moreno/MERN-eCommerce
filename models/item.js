const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {type: String, required: true},
    category:{type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    rating: {type: Number, required: true},
    reviews: {type: Number, required: true},
    description: {type: String, required: true},
    stock: {type: Number, required: true},
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;