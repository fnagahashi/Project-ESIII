import { getCustomRepository } from "typeorm";
import { IClientRequest } from "../../Interface/IClientInterface";
import { ClientRepositories } from "../../repository/ClientRepositories";
import { hash } from "bcryptjs";

class CreateClientService {
    async execute ({name, dateBirth, email, cpf, gender, typePhone, phone, password, addresses, creditCards }: IClientRequest){
        if (!email) {
            throw new Error ("Email invalido");
        }
        const clientRepository = getCustomRepository(ClientRepositories);
        const clientAlreadyExist = await clientRepository.findOne({ email });
            if (clientAlreadyExist) {
                throw new Error("Cliente já existe");
            }
        
        const requiredFields = { name, dateBirth, email, cpf, gender, typePhone, phone, password, addresses, creditCards };

        for (const [key, value] of Object.entries(requiredFields)) {
            if (value === undefined || value === null) {
        throw new Error(`${key} é obrigatório`);
    }
    if (typeof value === "string" && value.trim() === "") {
        throw new Error(`${key} é obrigatório`);
    }
    if (Array.isArray(value) && value.length === 0) {
        throw new Error(`${key} é obrigatório`);
    }
        }
        const passwordHash = await hash(password, 8);
        const client = clientRepository.create({ name, dateBirth, email, cpf, gender, typePhone, phone, password:passwordHash, addresses: addresses, creditCards: creditCards });
        await clientRepository.save(client);
          
        return client;
    }
}
export {CreateClientService};