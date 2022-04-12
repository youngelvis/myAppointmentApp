const User = require("./User");
const uuid = require("uuid");
module.exports = class UserFactory {
  constructor() {}

  async createUser(object) {
    const user = new User({
      userId: uuid.v4(),
      username: object.username,
      accountType: object.accountType,
      authType: object.authType,
      email: object.email
    });

    return user;
  }

  async updateUser(existingUser, updateObject) {

    const user = new User({
      userId:  existingUser.userId,
      username: updateObject.username || existingUser.username,
      accountType: updateObject.accountType || existingUser.accountType,
      authType: updateObject.authType || existingUser.authType,
      email: updateObject.email || existingUser.email,
    });

    return user;
  }

  async deleteUser(existingUser, updateObject){
    const user = new User({
      userId:  existingUser.userId,
      username: updateObject.username || existingUser.username,
      accountType: updateObject.accountType || existingUser.accountType,
      authType: updateObject.authType || existingUser.authType,
      email: updateObject.email || existingUser.email,

    });

    return user;

  }
};
