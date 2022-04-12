const assert = require("assert");

module.exports = class Appointment {
  constructor({ appointmentId, date, time, productId, businessId, userId }) {
    assert(appointmentId, "appointmentId is required");
    assert(date, "date is required");
    assert(time, "time is required");
    assert(productId, "productId  is required");
    assert(businessId, "businessId is required");
    assert(userId, "userId is required")


    this.appointmentId = appointmentId;
    this.date = date;
    this.time = time;
    this.productId = productId;
    this.businessId = businessId;
    this.userId = userId
  }

  getAppointmentId() {
    return this.appointmentId;
  }

  getDate() {
    return this.date;
  }

  getTime() {
    return this.time;
  }

  getProductId() {
    return this.productId;
  }
  getBusinessId() {
    return this.businessId;
  }
  getUserId() {
    return this.userId;
  }
  toObject() {
    return {
      user: this.appointmentId,
      date: this.date,
      time: this.time,
      productId: this.productId,
      businessId: this.businessId,
      userId: this.userId
    };
  }
};
