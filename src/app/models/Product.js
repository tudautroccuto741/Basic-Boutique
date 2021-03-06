const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Product = new Schema({
    name: { type: String, required: true, },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    image: { type: String, maxlength: 500 },
    slug: { type: String, slug: "name", unique: true },
}, {
    timestamps: true,
});

//add plugins
mongoose.plugin(slug);
Product.plugin( mongooseDelete, { 
        deleteAt: true,
        overrideMethods: 'all' 
    });

module.exports = mongoose.model('Product', Product);