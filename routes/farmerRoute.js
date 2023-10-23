import express from 'express'
const router = express.Router();
import FarmerController from '../farmer/FarmerController.js';

router.post('/farmers', FarmerController.createFarmer);
router.get('/farmers', FarmerController.getAllFarms)
router.get('/farmers/:id', FarmerController.getFarmerById);
router.delete('/farmers/:farmerId', FarmerController.deleteFarmer);


export default router