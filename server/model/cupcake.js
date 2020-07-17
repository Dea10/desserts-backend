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
        type: Array,
        default: []
    },
    price: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    },
    status: {
        type: Boolean,
        default: true
    }
});

cupcakeSchema.plugin(uniqueValidator, {message: '{PATH} already used'});

module.exports = mongoose.model('Cupcake', cupcakeSchema);