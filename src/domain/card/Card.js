const assert = require("assert");
module.exports = class Card {
    constructor({cardId, cardName, cardNumber, cvc, userId}) {
        assert(cardName, "cardName is needed");
        assert(cardId, "cardId is needed");
        assert(cardNumber, "cardNumber is needed");
        assert(cvc, "CVC is needed");
        assert(userId,  "userId is needed");
        this.cardId = cardId;
        this.cardName = cardName;
        this.cardNumber = cardNumber;
        this.cvc = cvc;
        this.userId = userId;
    }
    getCardId(){
        return this.cardId;
    }
    getCardNumber(){
        return this.cardName;
    }
    getCardNumber(){
        return this.cardNumber;
    }
    getCvc(){
        return this.cvc;
    }
    getUserId(){
        return this.userId;
    }
    toObject(){
        return{
            cardId : this.cardId,
            cardName: this.cardName,
            cardNumber: this.cardNumber,
            cvc: this.cvc,
            userId: this.userId
        };
    }
}