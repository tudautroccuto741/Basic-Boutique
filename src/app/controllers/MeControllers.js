const Product = require('../models/Product');
const { multipleMongooseToObject } = require('../../util/mongoose');
class MeController {

    //[GET]/me/stored/products
    storedProducts(req, res, next){

        Promise.all([Product.find({}), Product.countDocumentsDeleted()])
            .then(([products, deleteCount]) => 
                res.render('me/stored-products', {
                    deleteCount,
                    products: multipleMongooseToObject(products),
                })
            )
            .catch(next);
        // Product.countDocumentsDelete()
        //     .then((deleteCount) =>{

        //     })
        //     .catch(() =>{});

        // Product.find({})
        //     .then(products =>res.render('me/stored-products', {
        //         products: multipleMongooseToObject(products)
        //     }))
        //     .catch(next);
    }

    //[GET]/me/trash/products
    trashProducts(req, res, next){
        Product.findDeleted({})
            .then(products =>res.render('me/trash-products', {
                products: multipleMongooseToObject(products)
            }))
            .catch(next);
    }
}

module.exports = new MeController(); 