import express from 'express'
const router = express.Router();
import UserController from '../user/userController.js'
import { upload } from './productRoute.js';

router.post('/user',upload.single("image"), UserController.createUser);
router.get('/login', UserController.login)
router.get('/user/order', UserController.placeBatchOrder);



export default router