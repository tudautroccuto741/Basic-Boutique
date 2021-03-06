const Product = require('../models/Product');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');
const mongoose = require('../../util/mongoose');
class ProductControllers {
    //[GET]/show/:slug
    show(req, res, next){
        Product.findOne({ slug: req.params.slug })
            .then((product) => res.render('products/show', {
                product: mongooseToObject(product),
            }),
            )
            .catch(next);
    }

    // show form    
    //[GET]/products/create
    create(req, res, next){
        res.render('products/create');
    }

    // save data
    //[POST]/products/store
    store(req, res, next){
        // res.json(req.body)
        const product = new Product(req.body);
        product.save()
        .then(()=>res.redirect('/'))
        .catch(error => {

        });
    }

    // edit products    
    //[GET]/products/:id/edit
    edit(req, res, next){
        Product.findById(req.params.id)
            .then(product =>res.render('products/edit',{
                product: mongooseToObject(product)
            }))
            .catch(next);
        
    }

    // update products    
    //[PUT]/products/:id
    update(req, res, next){
        Product.updateOne({ _id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/products'))
            .catch(next);
        //res.json(req.body);        
    }

    // delete products    
    //[DELETE]/products/:id
    delete(req, res, next){
        Product.delete({ _id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // restore products    
    //[PATCH]/products/:id/restore
    restore(req, res, next){
        Product.restore({ _id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // destroy products    
    //[DELETE]/products/:id/destroy
    destroy(req, res, next){
        Product.deleteOne({ _id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new ProductControllers();