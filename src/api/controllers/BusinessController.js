const BusinessService = require('../../domain/business/BusinessService')
module.exports = class BusinessController {
    constructor (){}
// function to create business
    async createBusiness({ body }){
        // call the business service class
        const businessService = new BusinessService();
        // call the create business function in the business class and pass the body into the function
        const business = await businessService.createBusiness(body);
        // return appointment to the router
        return business;
    }

    // function to update business body
    async updateBusiness( {body} ){
        // call the business service class
        const businessService = new BusinessService();
        // call the update business function in the business class and pass the body into the function
        const business = await businessService.updateBusiness(body);
        // return appointment to the router
        return business;
    }

    // function to update business body
    async deleteBusiness( {body} ){
        // call the business service class
        const businessService = new BusinessService();
        // call delete business function in the business class and pass the body into the function
        const business = await businessService.deleteBusiness(body);
        // return appointment to the router
        return business;
    }
    // function to list body
    async list(){
        // call the business service class
        const businessService = new BusinessService();
        // call list function in the business class
        const business = await businessService.list();
        // return appointment to the router
        return business

    }
}