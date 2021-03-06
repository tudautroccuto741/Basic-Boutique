const Product = require('../models/Product');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteControllers {
    // [GET]/
    index(req, res, next){
        Product.find({})
            .then(products => {
                res.render('home', {products: multipleMongooseToObject(products)});
            })
            .catch(next);
       
    }

    //[GET]/search
    search(req, res){
        res.render('search')
    }
}

module.exports = new SiteControllers(); 