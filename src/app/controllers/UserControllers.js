const User = require('../models/User');
const mongoose = require('../../util/mongoose');
const { multipleMongooseToObject } = require('../../util/mongoose');


class UserControllers {

   // [GET]/user/register
   register(req, res, next){
      res.render('layouts/register.hbs')
   }
    
   // [GET]/user/login
   login(req, res, next){
      res.render('layouts/login.hbs')
   }

   // [POST]/:slug/login
   // expressAsyncHandler(async (req, res) => {
   //    // await User.remove({});
   //    const createdUsers = await User.insertMany(data.users);
   //    res.send({ createdUsers });
   //  })
}

module.exports = new UserControllers();