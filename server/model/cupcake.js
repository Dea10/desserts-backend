const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;



let cupcakeSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'name required']
    },
    desc: {
        type: String
    },
    img: {
        type: Array
    },
    price: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    }
});

cupcakeSchema.plugin(uniqueValidator, {message: '{PATH} already used'});

module.exports = mongoose.model('Cupcake', cupcakeSchema);