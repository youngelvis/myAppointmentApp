const assert = require('assert')
module.exports = class Business {
    constructor({ businessId, businessName, description, location, userId }) {
    assert(businessId, "businessId is required");
    assert(businessName, "businessName is required");
    assert(description, "description is required");
    assert(location, "location is required");
    assert(userId, "userId is required");
 
    this.businessId = businessId;
    this.businessName = businessName;
    this.description = description;
    this.location = location;
    this.userId = userId;
  }

  getBusinessId() {
    return this.businessId;
  }

  getBusinessName() {
    return this.businessName;
  }

  getDescription() {
    return this.description;
  }

  getLocation() {
    return this.location;
  }

  getUserId() {
    return this.userId;
  }

  toObject() {
    return {
      businessId: this.businessId,
      businessName: this.businessName,
      description: this.description,
      location: this.location,
      userId: this.userId,
    };
  }
};
