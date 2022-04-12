const knex = require('knex');
const config = require('../../../knexfile');
const my_db = knex(config);

module.exports = class CardRepository{
    constructor() {
    }
    async createCard(card){
        await my_db('card').insert(card);

        return card;
    }
    async updateCard(card){
        await my_db('card')
            .where({cardId: card.cardId})
            .update(card);
        return card;
    }
    async deleteCard(card){
        await my_db('card')
            .where({cardId: card.cardId})
            .del(card);
        return card;
    }
    async getById(id){
        const card = await my_db('card')
            .where({cardId: id})
            .first()

        return card;
    }
}