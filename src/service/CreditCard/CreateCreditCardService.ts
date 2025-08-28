import { getCustomRepository } from "typeorm";
import { ICreditCardRequest } from "../../Interface/ICreditCardInterface";
import { CreditCardRepositories } from "../../repository/CreditCardRepositories";

class CreateCreditCardService {
    async execute ({name,
        number,
        brand,
        securityCode,
        clientId }: ICreditCardRequest){
        if (!number) {
            throw new Error ("O cliente deve cadastrar pelo menos um cartão de crédito!");
        }
        const clientRepository = getCustomRepository(CreditCardRepositories);
        const clientAlreadyExist = await clientRepository.findOne({ number, });

        const client = clientRepository.create({ name, number, brand, securityCode, clientId });
        await clientRepository.save(client);
          
        return client;
    }
}
export {CreateCreditCardService};