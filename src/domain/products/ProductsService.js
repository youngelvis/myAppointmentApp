const ProductFactory = require("./ProductsFactory");
const ProductRepository = require("./ProductsRepository");
const BusinessService = require("../business/BusinessService")
const ApiError = require("../../api/shared/ApiError");
const productRepository = new ProductRepository();
const productFactory = new ProductFactory();
const businessService = new BusinessService();

module.exports = class ProductService {
  constructor() {}

  async createProduct(object) {

    const businessInfo = await businessService.getById(object.businessId);

    if (!businessInfo ) {
      throw ApiError.notFound('Business not found');
    }

    const productData = await productFactory.createProduct(object);

    return await productRepository.createProduct(productData);


  }

  async getById(id){

    return await productRepository.getById(id);

  }

  async updateProduct(object) {

    const businessInfo = await businessService.getById(object.businessId);
    const productInfo= await this.getById(object.productId);

    if (!businessInfo ) {
      throw ApiError.notFound('Business not found');
    }
    if (!productInfo ) {
      throw ApiError.notFound('Business not found');
    }

    const productData = await productFactory.updateProduct(productInfo, object);

    return await productRepository.updateProduct(productData);


  }
  async deleteProduct(object) {

    const businessInfo = await businessService.getById(object.businessId);
    const productInfo= await this.getById(object.productId);

    if (!businessInfo ) {
      throw ApiError.notFound('Business not found');
    }
    if (!productInfo ) {
      throw ApiError.notFound('Business not found');
    }

    const productData = await productFactory.deleteProduct(productInfo, object);

    return await productRepository.deleteProduct(productData);



  }
  async list(){

    return productRepository.list();

  }
};