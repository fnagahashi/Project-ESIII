import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../../repository/ClientRepositories";

export class ListClientService {
    async execute () {
        const clientRepository = getCustomRepository(ClientRepositories);
        const client = await clientRepository.find();
        return client;   
    }
}
