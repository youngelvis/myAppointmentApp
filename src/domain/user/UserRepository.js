const knex = require('knex')
const config = require('../../../knexfile')
const my_db = knex(config)
module.exports = class UserRepository {
    constructor (){}

    async createUser(user){
        await my_db('user').insert(user);
        return user;
    }
    async getById(id){
       const user = await my_db('user')
            .where({userId: id})
            .first()

        return user
    }

    async updateUser(user){
        await my_db('user')
            .where({userId: user.userId})
            .update(user);
        return user;
    }

    async deleteUser(user){
        await my_db('user')
            .where({userId: user.userId})
            .del(user)
        return user;
    }
}