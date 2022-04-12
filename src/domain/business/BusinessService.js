const BusinessFactory = require("./BusinessFactory");
const BusinessRepository = require("./BusinessRepository");
const UserService = require('../user/UserService');
const ApiError = require("../../api/shared/ApiError");
const businessRepository = new BusinessRepository();
const businessFactory = new BusinessFactory();
const userService = new UserService();

module.exports = class BusinessService {
  constructor() {}

  async createBusiness(object) {

    const userInfo = await userService.getById(object.userId);
    if (!userInfo) {
      throw ApiError.notFound('User not found');
    }

    const businessData = await businessFactory.createBusiness(object);

    return await businessRepository.createBusiness(businessData);


  }

  async getById(id){

    return await businessRepository.getById(id);

  }
  async updateBusiness(object) {

    const businessInfo = await this.getById(object.businessId)

    const userInfo =  userService.getById(object.userId);
    if (!userInfo) {
      throw ApiError.notFound('User not found');
    }
    if (!businessInfo) {
      throw ApiError.notFound('User not found');
    }
    const businessData = await businessFactory.updateBusiness(businessInfo,object);

    return await businessRepository.updateBusiness(businessData);


  }

  async deleteBusiness(object) {
    const businessInfo = await this.getById(object.businessId)
    const userInfo =  userService.getById(object.userId)
    if (!userInfo) {
      throw ApiError.notFound('User not found');
    }
    if (!businessInfo) {
      throw ApiError.notFound('User not found');
    }
    const businessData = await businessFactory.deleteBusiness(businessInfo, object);

    return await businessRepository.deleteBusiness(businessData);



  }
  async list(){

    return businessRepository.list();

  }
};
