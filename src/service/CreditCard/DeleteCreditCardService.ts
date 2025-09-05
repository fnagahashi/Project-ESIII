import { getCustomRepository } from "typeorm";
import { CreditCardRepositories } from "../../repository/CreditCardRepositories";

class DeleteCreditCardService{
    async execute(id: string) {
        const creditCardRepository = getCustomRepository(CreditCardRepositories);
        const creditCard = await creditCardRepository.findOne({where: {id}});
        if (!creditCard) {
            throw new Error("Cartão de crédito não encontrado");
        }
        await creditCardRepository.remove(creditCard);

        return { id, message: "Cartão de crédito deletado com sucesso" };
    }
}
export{DeleteCreditCardService};
