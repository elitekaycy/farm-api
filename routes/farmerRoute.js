import express from 'express'
const router = express.Router();
import FarmerController from '../farmer/FarmerController';

router.post('/farmers', FarmerController.createFarmer);
router.get('/farmers/:farmerId', FarmerController.getFarmerById);
router.delete('/farmers/:farmerId', FarmerController.deleteFarmer);

module.exports = router;
