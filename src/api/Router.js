const express = require("express");
const UserController = require("./controllers/UserController");
const AppointmentController = require("./controllers/AppointmentController");
const BusinessController = require("./controllers/BusinessController");
const ProductController = require("./controllers/ProductsController");
const CardController = require("./controllers/CardController");

module.exports = () => {
  const app = express();
  app.use(express.json());

  const userController = new UserController();
  const appointmentController = new AppointmentController();
  const businessController = new BusinessController();
  const productController = new ProductController();
  const cardController = new CardController();

  app.get("/", (req, res) => {
    res.send("hello world");
  });

  app.get("/about", (req, res) => {
    res.send("thanks for learning more about us.");
  });
//  user
  app.post("/api/v1/CreateUser", async (req, res) => {
      const user = await userController.createUser({body: req.body});
      res.send(user);

  });

  app.post("/api/v1/UpdateUser", async (req, res) => {
    try {
      const user = await userController.updateUser({body: req.body});
      res.send(user);
    }
    catch (error){
      res.status(error.getStatus()).json(error.getBody());
    }
  });

  app.post("/api/v1/DeleteUser", async (req, res) => {
    try {
      const user = await userController.deleteUser({body: req.body});
      res.status(204).json(user);
    }
    catch (error){
      res.status(error.getStatus()).json(error.getBody());
    }
  });

// appointment
  app.post("/api/v1/CreateAppointment", async (req, res) => {
   try {
     const appointment = await appointmentController.createAppointment({
       body: req.body,
     });
     res.send(appointment);
   }
   catch (error){
      res.status(error.getStatus()).json(error.getBody());
   }
  });

  app.post("/api/v1/UpdateAppointment", async(req, res) => {
    try {
      const appointment = await appointmentController.updateAppointment({
        body: req.body,
      });
      res.send(appointment);
    }
    catch (error){
      res.status(error.getStatus()).json(error.getBody());
    }
  });

  app.post("/api/v1/DeleteAppointment", async (req, res) => {
    try {
      const appointment = await appointmentController.deleteAppointment({
        body: req.body,
      });
      res.send(appointment);
    }
    catch (error){
      res.status(error.getStatus()).json(error.getBody());
    }
  });

  app.get("/api/v1/listAppointment", async (req, res)=>{
    const listAppointment = await appointmentController.list();
    res.send(listAppointment);
  });

  app.post("/api/v1/listAppointmentByUserId",async(req, res)=>{
    try{
      const listByUserId = await appointmentController.listByUserId({
        body: req.body,
      });
      res.send(listByUserId);
    }
    catch (error) {
      res.status(error.getStatus()).json(error.getBody());
    }
  })

// business
  app.post("/api/v1/CreateBusiness", async (req, res) => {
    try{
      const business = await businessController.createBusiness({
        body: req.body,
      });
      res.send(business);
    }
    catch (error){
      res.status(error.getStatus()).json(error.getBody());
    }
  });

  app.post("/api/v1/updateBusiness", async (req, res) => {
    try{
      const business = await businessController.updateBusiness({
        body: req.body,
      });
      res.send(business);
    }
    catch (error){
      res.status(error.getStatus()).json(error.getBody());
    }
  });

  app.post("/api/v1/DeleteBusiness", async (req, res) => {
    try{
      const business = await businessController.deleteBusiness({
        body: req.body,
      });
      res.send(business);
    }
    catch (error) {
      res.status(error.getStatus()).json(error.getBody());
    }
  });

  app.get("/api/v1/ListBusiness", async(req, res)=>{
    const listBusiness = await businessController.list();
    res.send(listBusiness);
  });

  // product
  app.post("/api/v1/CreateProduct", async (req, res) => {
    try {
      const product = await productController.createProduct({
        body: req.body,
      });
      res.send(product);
    }
    catch (error){
      res.status(error.getStatus()).json(error.getBody());
    }
  });

  app.post("/api/v1/UpdateProduct", async (req, res) => {
   try {
      const product = await productController.updateProduct({
        body: req.body,
      });
      res.send(product);
    }
    catch (error){
     res.status(error.getStatus()).json(error.getBody());
    }
  });

  app.post("/api/v1/DeleteProduct", async (req, res) => {
    try{
      const product = await productController.deleteProduct({
        body: req.body,
      });
      res.send(product);
    }
    catch (error) {
      res.status(error.getStatus()).json(error.getBody());
    }
  });

  app.get("/api/v1/ListProduct", async(req, res)=>{
    const listProduct = await productController.list();
    res.send(listProduct);
  })


  //card
  app.post("/api/v1/CreateCard", async(req, res)=>{
    const card = await cardController.createCard({
      body: req.body,
    });
    res.send(card);
  });
  app.post("/api/v1/UpdateCard", async(req, res)=>{
    const card = await cardController.updateCard({
      body: req.body,
    });
    res.send(card);
  });
  app.post("/api/v1/DeleteCard", async(req, res)=>{
    const card = await cardController.deleteCard({
      body: req.body,
    });
    res.send(card);
  });

  return app;
};
