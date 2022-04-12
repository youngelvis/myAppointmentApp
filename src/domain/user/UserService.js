const UserFactory = require("./UserFactory");
const UserRepository = require("./UserRepository");
const ApiError = require("../../api/shared/ApiError");

module.exports = class UserService {
  constructor() {}

  async createUser(object) {
    const userRepository = new UserRepository();
    const userFactory = new UserFactory();

    const userData = await userFactory.createUser(object);

    const user = await userRepository.createUser(userData);

    return user;
  }



  async getById(id){

    const userRepository = new UserRepository();
    const user = await userRepository.getById(id);
    return user;
  }

  async updateUser(object) {
    const userRepository = new UserRepository();
    const userFactory = new UserFactory();
    const userInfo = await this.getById(object.userId);
    if (!userInfo) {
      throw ApiError.notFound('User not found');
    }
    const userData = await userFactory.updateUser(userInfo, object);

    const user = await userRepository.updateUser(userData);

    return user;
  }

  async deleteUser(object){
    const userRepository = new UserRepository();
    const userFactory = new UserFactory();
    const userInfo = await this.getById(object.userId);
    if (!userInfo) {
      throw ApiError.notFound('User not found');
    }
    const userData = await userFactory.deleteUser(userInfo,object);
    const user = await userRepository.deleteUser(userData);


    return user;
  }
};
