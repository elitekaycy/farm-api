import express from 'express'
const router = express.Router();
import TypeController from '../type/typeController.js'

router.post('/types', TypeController.createType);
router.get('/types', TypeController.getAllTypes);

export default router
