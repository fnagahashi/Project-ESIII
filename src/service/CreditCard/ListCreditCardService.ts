import { getCustomRepository } from "typeorm";
import { CreditCardRepositories } from "../../repository/CreditCardRepositories";

export class ListCreditCardService {
    async execute () {
        const creditCardRepository = getCustomRepository(CreditCardRepositories);
        const creditCards = await creditCardRepository.find({
            relations: ["client"]
        });

        const safeCreditCards = creditCards.map(card => ({
            id: card.id,
            cardName: card.cardName,
            cardNumber: card.cardNumber.slice(-4),
            brand: card.brand,
            client: {
                id: card.client.id,
                name: card.client.name,
                email: card.client.email
            }
        }));

        return {
            total: safeCreditCards.length,
            creditCards: safeCreditCards
        };
    }
}
