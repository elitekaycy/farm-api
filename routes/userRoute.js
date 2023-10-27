import express from 'express'
const router = express.Router();
import UserController from '../user/userController.js'
import { upload } from './productRoute.js';

router.post('/user', UserController.createUser);
router.post('/login', UserController.login)
router.post('/order', UserController.placeBatchOrder);
router.get('/order/:id', UserController.viewOrderHistory)

//orders
router.get('/orders/:type', UserController.viewOrders)
router.get('/orders', UserController.viewAllOrders)



export default router