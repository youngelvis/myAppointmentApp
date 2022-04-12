const UserService = require('../../domain/user/UserService');
module.exports = class UserController {
    constructor (){}
// function to create user
    async createUser({ body }){
        // call the user service class
        const userService = new UserService();
        // call the create user function in the user class and pass the body into the function
        const user = await userService.createUser(body);
        // return product to the router
        return user;
    }

    // function to update user
    async updateUser({ body }){
        // call the user service class
        const userService = new UserService();
        // call the update user function in the user class and pass the body into the function
        const user = await userService.updateUser(body);
        // return product to the router
        return user;
    }
    // function to delete user
    async deleteUser ({ body}){
        // call the user service class
        const userService = new UserService();
        // call delete user function in the user class and pass the body into the function
        const user = await userService.deleteUser(body);
        // return product to the router
        return user;
    }
}