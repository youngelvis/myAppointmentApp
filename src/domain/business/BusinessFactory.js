const Business = require("./Business");
const uuid = require("uuid");
module.exports = class BusinessFactory {
  constructor() {}

  async createBusiness(object) {
    const business = new Business({
      businessId: uuid.v4(),
      businessName: object.businessName,
      location: object.location,
      description: object.description,
      userId: object.userId,
    });
    return business;
  }
  async updateBusiness(existingBusiness, updateObject) {
    const business = new Business({
      businessId: existingBusiness.businessId,
      businessName: updateObject.businessName || existingBusiness.businessName,
      location: updateObject.location || existingBusiness.location,
      description: updateObject.description || existingBusiness.description,
      userId: existingBusiness.userId
    });
    return business;
  }
  async deleteBusiness(existingBusiness, updateObject){
    const business = new Business({
      businessId: existingBusiness.businessId,
      businessName: updateObject.businessName || existingBusiness.businessName,
      location: updateObject.location || existingBusiness.location,
      description: updateObject.description || existingBusiness.description,
      userId: existingBusiness.userId
    });
    return business;
  }
};
