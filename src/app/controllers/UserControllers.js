const User = require('../models/User');
const mongoose = require('../../util/mongoose');
const { multipleMongooseToObject } = require('../../util/mongoose');


class UserControllers {

   // [GET]/user/register
   register(req, res, next){
      res.render('loginForm/form.html')
   }
    
   // [GET]/user/login
   login(req, res, next){
      res.render('loginForm/login.html')
   }

   // [POST]/:slug/login
   // expressAsyncHandler(async (req, res) => {
   //    // await User.remove({});
   //    const createdUsers = await User.insertMany(data.users);
   //    res.send({ createdUsers });
   //  })
}

module.exports = new UserControllers();