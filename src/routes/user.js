const express = require('express')
const router = express.Router()

const userController = require('../app/controllers/UserControllers')

router.get('/register', userController.register)
router.get('/login', userController.login)
// router.post('/:slug/login', userController.expressAsyncHandler)

module.exports = router
