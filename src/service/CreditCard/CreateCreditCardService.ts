import { getCustomRepository } from "typeorm";
import { ICreditCardRequest } from "../../Interface/ICreditCardInterface";
import { CreditCardRepositories } from "../../repository/CreditCardRepositories";

class CreateCreditCardService {
    async execute ({cardName,
        cardNumber,
        brand,
        securityCode,
        clientId }: ICreditCardRequest){
        if (!cardNumber) {
            throw new Error ("O cliente deve cadastrar pelo menos um cartão de crédito!");
        }
        if (!cardName || !cardNumber || !brand || !securityCode) {
            throw new Error("Todos os campos do cartão de crédito são obrigatórios");
        }
        const creditCardRepository = getCustomRepository(CreditCardRepositories);
        const creditCardAlreadyExist = await creditCardRepository.findOne({ where:{ cardNumber } });

        const creditCard = creditCardRepository.create({ cardName, cardNumber, brand, securityCode, client: { id: clientId } });
        await creditCardRepository.save(creditCard);
        const allCards = await creditCardRepository.find({ where: { client:{id: clientId } } });

        return creditCard;
    }
}
export {CreateCreditCardService};