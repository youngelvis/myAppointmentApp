const knex = require('knex')
const config = require('../../../knexfile')
const my_db = knex(config)
module.exports = class BusinessRepository {
    constructor (){}

    async createBusiness(business){
        await my_db('business').insert(business);
        return business;
    }
    async getById(id){
        const business = await my_db('business')
            .where({businessId: id})
            .first()

        return business
    }
    async updateBusiness(business){
        await my_db('business')
            .where({businessId: business.businessId})
            .update(business);
        return business;
    }
    async deleteBusiness(business){
        await my_db('business')
            .where({businessId: business.businessId})
            .del(business);
        return business;

    }
    async list(){
        const business =await my_db('business')
            .select("*");
        return business
    }
}