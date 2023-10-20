import express from 'express'
const router = express.Router();
import ProductController from '../Product/ProductController.js'


router.post('/products', ProductController.createProduct);
router.get('/products', ProductController.getAllProducts);
router.get('/products/type/:typeId', ProductController.getProductsByType);
router.get('/products/farmer/:farmerId', ProductController.getProductsByFarmer);
router.get('/products/:productId', ProductController.getProductById);


export default router