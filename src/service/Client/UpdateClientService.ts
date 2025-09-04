import { getCustomRepository } from "typeorm";
import { IClientRequest } from "../../Interface/IClientInterface";
import { ClientRepositories } from "../../repository/ClientRepositories";

class UpdateClientService {
    async execute ({id, name, dateBirth, email, cpf, gender, typePhone, phone, password }: IClientRequest){
        if (!email) {
            throw new Error ("Email invalido");
        }
        const clientRepository = getCustomRepository(ClientRepositories);
        const client = await clientRepository.findOne(id);
        
        if (!client) {
            throw new Error ("Cliente não encontrado");
        }
        if (name) {
            client.name = name;
        }
        if (dateBirth) {
            client.dateBirth = dateBirth;
        }
        if (cpf) {
            client.cpf = cpf;
        }
        if (gender) {
            client.gender = gender;
        }
        if (typePhone) {
            client.typePhone = typePhone;
        }
        if (phone) {
            client.phone = phone;
        }
        if (email) {
            client.email = email;
        }
        
        await clientRepository.update(id || 0, client);
        
        return client;
    }
}
export {UpdateClientService};