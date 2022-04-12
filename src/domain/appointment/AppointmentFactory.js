const Appointment = require("./Appointment");
const uuid = require("uuid");
module.exports = class AppointmentFactory {
  constructor() {}

  async createAppointment(object) {
    const appointment = new Appointment({
      appointmentId: uuid.v4(),
      date: object.date,
      time: object.time,
      productId: object.productId,
      businessId: object.businessId,
      userId: object.userId
    });
    return appointment;
  }
  async updateAppointment(existingAppointment, updateObject) {
    const appointment = new Appointment({
      appointmentId: existingAppointment.appointmentId,
      date: updateObject.date || existingAppointment.date,
      time: updateObject.time || existingAppointment.time,
      productId: existingAppointment.productId,
      businessId: existingAppointment.businessId,
      userId: existingAppointment.userId
    });
    return appointment;
  }
  async deleteAppointment(existingAppointment, updateObject) {
    const appointment = new Appointment({
      appointmentId: existingAppointment.appointmentId,
      date: updateObject.date || existingAppointment.date,
      time: updateObject.time || existingAppointment.time,
      productId: existingAppointment.productId,
      businessId: existingAppointment.businessId,
      userId: existingAppointment.userId
    });
    return appointment;
  }
};
