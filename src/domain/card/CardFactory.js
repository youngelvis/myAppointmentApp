const Card = require('./Card')
const uuid = require('uuid');

module.exports = class CardFactory{
    constructor() {
    }
    async createCard(object){

        const card = new Card({
            cardId : uuid.v4(),
            cardName: object.cardName,
            cardNumber: object.cardNumber,
            cvc: object.cvc,
            userId: object.userId
        })
        return card;
    }
    async updateCard(existingCard, updateObject){
        const card = new Card({
            cardId: existingCard.cardId,
            cardName: updateObject.cardName||existingCard.cardName,
            cardNumber: updateObject.cardNumber || existingCard.cardNumber,
            cvc: updateObject.cvc || existingCard.cvc,
            userId: existingCard.userId
        });
        return card;
    }
    async deleteCard(existingCard, updateObject){
        const card = new Card({
            cardId: existingCard.cardId,
            cardName: updateObject.cardName||existingCard.cardName,
            cardNumber: updateObject.cardNumber || existingCard.cardNumber,
            cvc: updateObject.cvc || existingCard.cvc,
            userId: existingCard.userId
        })
        return card;
    }
}