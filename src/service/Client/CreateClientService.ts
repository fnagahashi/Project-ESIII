import { getCustomRepository } from "typeorm";
import { IClientRequest } from "../../Interface/IClientInterface";
import { ClientRepositories } from "../../repository/ClientRepositories";

class CreateClientService {
    async execute ({name, dateBirth, }: IClientRequest){
        if (!email) {
            throw new Error ("Email invalido");
        }
        const clientRepository = getCustomRepository(ClientRepositories);
        const clientAlreadyExist = await clientRepository.findOne({ email, });
        
        if (clientAlreadyExist) {
            throw new Error("Cliente já existe");
        }

        const client = clientRepository.create({ name, tel, email, endereco, bairro, cidade, uf, });
        await clientRepository.save(client);
          
        return client;
    }
}
export {CreateClientService};