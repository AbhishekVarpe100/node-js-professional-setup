const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductControllers');
router.post('/create-order', productController.createOrder);
router.get('/get-order/:id', productController.getOrder);
router.get('/get-all', productController.getAll);   
router.post('/update-product', productController.updateProduct);
router.get('/get-by-name',productController.getByName)
router.get('/get-by-color',productController.getByColor)
router.delete('/delete/:id',productController.deleteProduct)
module.exports = router;
