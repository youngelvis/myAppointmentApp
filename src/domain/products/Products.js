const assert = require("assert");
module.exports = class Product {
  constructor({ productId, productName, description, price, businessId }) {
    assert(productId, "productId is required");
    assert(productName, "productName is required");
    assert(description, "description is required");
    assert(price, "price is required");
    assert(businessId, "businessId is required");

    this.productId = productId;
    this.productName = productName;
    this.description = description;
    this.price = price;
    this.businessId = businessId;
  }

  getProductId() {
    return this.productId;
  }

  getProductName() {
    return this.productName;
  }

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }

  getBusinessId() {
    return businessId;
  }

  toObject() {
    return {
      user: this.productId,
      productName: this.productName,
      description: this.description,
      price: this.price,
      businessId: this.businessId,
    };
  }
};
