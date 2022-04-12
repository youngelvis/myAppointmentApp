// import appointment service
const AppointmentService = require("../../domain/appointment/AppointmentService");
const appointmentService = new AppointmentService();
module.exports = class AppointmentController {
  constructor() {}

// function to create appointment
  async createAppointment({ body }) {
    // call the create appointment function in the appointment class and pass the body into the function
    const appointment = await appointmentService.createAppointment(body);
    // return appointment to the router
    return appointment;
  }

  // function to update appointment body
  async updateAppointment({ body }) {
    // call the update appointment function in the appointment class and pass the body into the function
    const appointment = await appointmentService.updateAppointment(body);
    // return appointment to the router
    return appointment;
  }

// function to delete appointment body
  async deleteAppointment({ body }) {
    // call delete appointment function in the appointment class and pass the body into the function
    const appointment = await appointmentService.deleteAppointment(body);
    // return appointment to the router
    return appointment;
  }

  // function to list all the appointments
  async list(){
    // call list function in the appointment class
    const appointment = await appointmentService.list();
    // return appointment to the router
    return appointment;
  }
  // function to list all the appointments with the specific userId
  async listByUserId( { body }){
    // call the appointment service class
    const appointmentService = new AppointmentService();
    // call listByUserId function in the appointment class
    const appointment = await appointmentService.listByUserId(body);
    // return appointment to the router
    return appointment;
  }

};
