import { Type, Product, Farmer } from "../models/index.js";

class ProductRepository {
  static async createProduct(productData) {
    try {
      const product = await Product.create(productData);
      return product;
    } catch (error) {
      throw error;
    }
  }

  static async getAllProducts() {
    try {
      return await Product.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getProductsByType(typeId) {
    try {
      return await Product.findAll({
        where: { typeId },
        include: [{ model: Type, as: 'type' }],
      });
    } catch (error) {
      throw error;
    }
  }

  static async getProductsByFarmer(farmerId) {
    try {
      return await Product.findAll({
        where: { farmerId },
        include: [{ model: Farmer, as: 'farmer' }],
      });
    } catch (error) {
      throw error;
    }
  }

  static async getProductById(productId) {
    try {
      return await Product.findByPk(productId, {
        include: [{ model: Type, as: 'type' }, { model: Farmer, as: 'farmer' }],
      });
    } catch (error) {
      throw error;
    }
  }
}

export default ProductRepository
