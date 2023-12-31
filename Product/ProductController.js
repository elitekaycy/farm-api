import ProductRepository from './productRepo.js'

class ProductController {

  static async createProduct(req, res) {
    try {
      console.log("req file is  ", req.file)
      console.log("req body ", req.body, req.body.name)

      const fileLink = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

      const productData = {...req.body, image: fileLink}
      const product = await ProductRepository.createProduct(productData);
      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create the product' });
    }
  }

  static async getAllProducts(req, res) {
    try {
      const products = await ProductRepository.getAllProducts();
      return res.json(products);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to retrieve products' });
    }
  }


  static async getProductsByType(req, res) {
    const typeId = req.params.typeId;
    try {
      const products = await ProductRepository.getProductsByType(typeId);
      return res.json(products);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to retrieve products by type' });
    }
  }


  static async getProductsByFarmer(req, res) {
    const farmerId = req.params.farmerId;
    try {
      const products = await ProductRepository.getProductsByFarmer(farmerId);
      return res.json(products);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to retrieve products by farmer' });
    }
  }


  static async getProductById(req, res) {
    const productId = req.params.productId;
    try {
      const product = await ProductRepository.getProductById(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      return res.json(product);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to retrieve the product' });
    }
  }
}

export default ProductController
