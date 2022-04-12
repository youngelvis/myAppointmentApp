const Product = require("./Products");
const uuid = require("uuid");
module.exports = class ProductFactory {
  constructor() {}

  async createProduct(object) {
    const product = new Product({
      productId: uuid.v4(),
      productName: object.productName,
      description: object.description,
      price: object.price,
      businessId: object.businessId,
    });
    return product;
  }
  async updateProduct(existingProduct, updateObject) {
    const product = new Product({
      productId: existingProduct.productId,
      productName: updateObject.productName || existingProduct.productName,
      price: updateObject.price || existingProduct.price,
      description: updateObject.description || existingProduct.description,
      businessId: existingProduct.businessId
    });

    return product;
  }

  async deleteProduct (existingProduct, updateObject){
    const product = new Product({
      productId: existingProduct.productId,
      productName: updateObject.productName || existingProduct.productName,
      price: updateObject.price || existingProduct.price,
      description: updateObject.description || existingProduct.description,
      businessId: existingProduct.businessId
    });

    return product;
  }
};
