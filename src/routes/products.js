const express = require('express')
const router = express.Router()

const productController = require('../app/controllers/ProductControllers')

router.get('/create', productController.create)
router.post('/store', productController.store)
router.get('/:id/edit', productController.edit)
router.put('/:id', productController.update)
router.patch('/:id/restore', productController.restore)
router.delete('/:id/destroy', productController.destroy)
router.delete('/:id', productController.delete)
router.get('/:slug', productController.show)

module.exports = router