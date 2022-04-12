const ProductService = require('../../domain/Products/ProductsService');
module.exports = class ProductController {
    constructor (){}
// function to create product
    async createProduct({ body }){
        // call the product service class
        const productService = new ProductService();
        // call the create product function in the product class and pass the body into the function
        const product = await productService.createProduct(body);
        // return product to the router
        return product;
    }
// function to update product
    async updateProduct({ body }){
        // call the product service class
        const productService = new ProductService();
        // call the update product function in the product class and pass the body into the function
        const product = await productService.updateProduct(body);
        // return product to the router
        return product;
    }
    // function to delete product
    async deleteProduct({ body }){
        // call the product service class
        const productService = new ProductService();
        // call delete product function in the product class and pass the body into the function
        const product = await productService.deleteProduct(body);
        // return product to the router
        return product;
    }
    // function list product
    async list(){
        // call the product service class
        const productService = new ProductService();
        // call list function in the product class
        const product = await productService.list();
        // return product to the router
        return product;
    }
}