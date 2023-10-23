import express from 'express'
const router = express.Router();
import ProductController from '../Product/ProductController.js'
import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
     const filename = Date.now() + "-" + file.originalname;
      cb(null, filename);
    },
  });


const upload =  multer({ storage: storage })


router.post('/products', upload.single("image"), ProductController.createProduct);
router.get('/products', ProductController.getAllProducts);
router.get('/products/type/:typeId', ProductController.getProductsByType);
router.get('/products/farmer/:farmerId', ProductController.getProductsByFarmer);
router.get('/products/:productId', ProductController.getProductById);


export default router