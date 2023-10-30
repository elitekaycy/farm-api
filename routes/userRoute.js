import express from 'express'
const router = express.Router();
import UserController from '../user/userController.js'
import { upload } from './productRoute.js';

router.post('/user', UserController.createUser);
router.get('/users', UserController.getAllUsers)
router.post('/login', UserController.login)
router.post('/order', UserController.placeBatchOrder);
router.get('/order/:id', UserController.viewOrderHistory)

//orders
router.get('/orders/:type', UserController.viewOrders)
router.get('/orders', UserController.viewAllOrders)
router.post('/status', UserController.ordStatus)
router.post('/report', UserController.createUserReport)
router.get('/report', UserController.getAllReports)



export default router