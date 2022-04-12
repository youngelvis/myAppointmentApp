const CardService = require('../../domain/card/CardService');
const cardServices = new CardService();
module.exports = class CardController{
    constructor() {
    }
    async createCard({ body }){

        return await cardServices.createCard(body);
    }
    async updateCard({ body }){

        return await cardServices.updateCard(body);

    }
    async deleteCard({ body }){

        return await cardServices.deleteCard(body);

    }
}