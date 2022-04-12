const AppointmentFactory = require("./AppointmentFactory");
const AppointmentRepository = require("./AppointmentRepository");
const ProductService = require("../products/ProductsService");
const UserService = require("../user/UserService");
const BusinessService = require("../business/BusinessService")
const ApiError = require("../../api/shared/ApiError");
const appointmentRepository = new AppointmentRepository();
const appointmentFactory = new AppointmentFactory();
const productService = new ProductService();
const userService = new UserService();
const businessService = new BusinessService();

module.exports = class AppointmentService {
  constructor() {}

  async createAppointment(object) {
    // get product data from the database using product Id
    const productInfo = await productService.getById(object.productId);
    // get the user data from the database using user id
    const userInfo = await userService.getById(object.userId);
    // get business info from the database using business id
    const businessInfo = await businessService.getById(object.businessId);
    // check if product exist
    if (!productInfo) {
      throw ApiError.notFound("Product not found");
    }
    // check if user exist
    if(!userInfo){
      throw ApiError.notFound("user not found");
    }
    // check if business exist
    if(!businessInfo){

      throw ApiError.notFound("business not found");
    }

    // create appointment object
    const appointmentData = await appointmentFactory.createAppointment(object);
    // save appointment object in the database
    return await appointmentRepository.createAppointment(appointmentData);// return to appointment controller


  }
  // function to get appointment data from the data database using appointment ID
  async getById(id){
    // return the data
    return await appointmentRepository.getById(id);

  }
  async listByUserId(object){
    // get product data from the database using product Id
    const productInfo = await productService.getById(object.productId);
    // get the user data from the database using user id
    const userInfo = await userService.getById(object.userId);
    // get business info from the database using business id
    const businessInfo = await businessService.getById(object.businessId);
    // check if product exist
    if (!productInfo) {
      throw ApiError.notFound("Product not found");
    }
    // check if user exist
    if(!userInfo){
      throw ApiError.notFound("user not found");
    }
    // check if business exist
    if(!businessInfo){

      throw ApiError.notFound("business not found");
    }

    return appointmentRepository.listByUserId(object.userId)

  }


  async updateAppointment(object) {
    // get appointment data from the appointment table in database
    const appointmentInfo = await this.getById(object.appointmentId);
    // get product data from product table in the database using product id
    const productInfo = await productService.getById(object.productId);
    // check if product exist
    if (!productInfo) {
      throw ApiError.notFound("Product not found");
    }
    // check if the appointment exist
    if (!appointmentInfo) {
      throw ApiError.notFound("appointment not found");
    }
    // create an appointment object
    const appointmentData = await appointmentFactory.updateAppointment(appointmentInfo, object);
    // update the data in the database
    return await appointmentRepository.updateAppointment(
      appointmentData
    );// return appointment to appointment controller
  }

  async deleteAppointment(object) {
    // get appointment data from the appointment table in database
    const appointmentInfo = await this.getById(object.appointmentId);
    // get product data from product table in the database using product id
    const productInfo = await productService.getById(object.productId);
    // check if product exist
    if (!productInfo) {
      throw ApiError.notFound("Product not found");
    }
    // check if the appointment exist
    if (!appointmentInfo) {
      throw ApiError.notFound("appointment not found");
    }
    // create an appointment object
    const appointmentData = await appointmentFactory.deleteAppointment(appointmentInfo, object);
    // delete the object from the database
    return await appointmentRepository.deleteAppointment(
        appointmentData
    );// return appointment

  }
  // the function to get the  appointment table in the database
  async list(){
    // get the table from the database
    return appointmentRepository.list();// return the table to the appointment controller
  }

};
