const ApiError = require("../../api/shared/ApiError");
const CardFactory = require('./CardFactory');
const CardRepository = require("./CardRepository");
const UserService = require("../user/UserService");
const cardRepository = new CardRepository();
const cardFactory = new CardFactory();
const userService =  new UserService();
module.exports = class CardService{
    constructor() {
    }
    async createCard(object){
        const userInfo = await userService.getById(object.userId);
        if (!userInfo){
            throw ApiError.notFound("user not found");
        }
        const cardData = await cardFactory.createCard(object);
        return await cardRepository.createCard(cardData);



    }
    async getById(id){
        return cardRepository.getById(id);

    }
    async updateCard(object){
        const cardInfo =  await this.getById(object.cardId);
        const userInfo = await userService.getById(object.userId);
        if (!userInfo){
            throw ApiError.notFound('Card not found');
        }
        if (!cardInfo){
            throw ApiError.notFound('Card not found');
        }
        const cardData = await cardFactory.updateCard(cardInfo, object);
        return await cardRepository.updateCard(cardData);

    }
    async deleteCard(object){
        console.log(object)
        const cardInfo =  await cardRepository.getById(object.cardId);

        const userInfo = await userService.getById(object.userId);
        if (!userInfo){
            throw ApiError.notFound('Card not found');
        }
        if (!cardInfo){
            throw ApiError.notFound('Card not found');
        }
        const cardData = await cardFactory.deleteCard(cardInfo, object);
        return cardRepository.deleteCard(cardData);

    }
}