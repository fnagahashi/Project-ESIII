import { getCustomRepository } from "typeorm";
import { ICreditCardRequest } from "../../Interface/ICreditCardInterface";
import { CreditCardRepositories } from "../../repository/CreditCardRepositories";

class UpdateCreditCardService {
    async execute ({id, cardName, cardNumber, brand, securityCode }: ICreditCardRequest){
        const creditCardRepository = getCustomRepository(CreditCardRepositories);

        const creditCard = await creditCardRepository.findOne({where: {id}});

        if (!creditCard) {
            throw new Error ("Cartão de crédito não encontrado");
        }

        if (cardName) {
            creditCard.cardName = cardName;
        }
        if (cardNumber) {
            creditCard.cardNumber = cardNumber;
        }
        if (brand) {
            creditCard.brand = brand;
        }
        if (securityCode) {
            creditCard.securityCode = securityCode;
        }

        await creditCardRepository.save(creditCard);

        return {
            id: creditCard.id,
            cardName: creditCard.cardName,
            cardNumber: creditCard.cardNumber.slice(-4),
            brand: creditCard.brand,
            message: "Cartão de crédito atualizado com sucesso"
        };
    }
}
export {UpdateCreditCardService};