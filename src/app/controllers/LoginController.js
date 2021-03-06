const mongoose = require('../../util/mongoose');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');
const  User = require('../models/User');
const { multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose');
const mongoose = require('../../util/mongoose');

class LoginController {

    //[GET]/login
    show(req, res, next){
       res.render('hello')
    }
}

module.exports = new LoginController();