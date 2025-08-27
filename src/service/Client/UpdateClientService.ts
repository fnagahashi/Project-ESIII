import { getCustomRepository } from "typeorm";
import { IClientRequest } from "../../Interface/IClientInterface";
import { ClientRepositories } from "../../repository/ClientRepositories";

class UpdateClientService {
    async execute ({id, name, tel, email, endereco, bairro, cidade, uf}: IClientRequest){
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
        if (tel) {
            client.tel = tel;
        }
        if (email) {
            client.email = email;
        }
        if (endereco) {
            client.endereco = endereco;
        }
        if (bairro) {
            client.bairro = bairro;
        }
        if (cidade) {
            client.cidade = cidade;
        }
        if (uf) {
            client.uf = uf;
        }
        
        await clientRepository.update(id || 0, client);
        
        return client;
    }
}
export {UpdateClientService};