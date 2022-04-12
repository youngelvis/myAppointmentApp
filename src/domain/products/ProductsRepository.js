const knex = require('knex')
const config = require('../../../knexfile')
const my_db = knex(config)

module.exports = class ProductRepository {
    constructor (){}

    async createProduct(product){
        await my_db('product').insert(product);
        return product;
    }
    async getById(id){
        const product = await my_db('product')
            .where({productId: id})
            .first()
        return product
    }

    async updateProduct(product){
        await my_db('product')
            .where({productId: product.productId})
            .update(product);
        return product;
    }

    async deleteProduct(product){
        await my_db('product')
            .where({productId: product.productId})
            .del(product);
        return product;
    }
    async list(){
        const product =await my_db('product')
            .select("*");
        return product;
    }
}