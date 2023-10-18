import express from 'express'
const router = express.Router();
import TypeController from '../type/typeController'

router.post('/types', TypeController.createType);
router.get('/types', TypeController.getAllTypes);


module.exports = router;
