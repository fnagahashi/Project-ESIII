import { getCustomRepository } from "typeorm";
import { ICreditCardRequest } from "../../Interface/ICreditCardInterface";
import { CreditCardRepositories } from "../../repository/CreditCardRepositories";

class CreateCreditCardService {
    async execute ({name,
        brand,
        securityCode,
        clientId }: ICreditCardRequest){
        if (!email) {
            throw new Error ("Email invalido");
        }
        const clientRepository = getCustomRepository(CreditCardRepositories);
        const clientAlreadyExist = await clientRepository.findOne({ email, });

        const client = clientRepository.create({ name, tel, email, endereco, bairro, cidade, uf, });
        await clientRepository.save(client);
          
        return client;
    }
}
export {CreateCreditCardService};