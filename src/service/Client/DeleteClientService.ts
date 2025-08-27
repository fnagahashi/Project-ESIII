import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../../repository/ClientRepositories";

class DeleteClientService{
    async execute(id: string) {
        const clientRepository = getCustomRepository(ClientRepositories);
        const client = await clientRepository.findOne(id);
        if (!client) {
            throw new Error("Cliente não encontrado");
        }
        await clientRepository.remove(client);

        return { message: "Cliente deletado com sucesso" };
    }
}
export{DeleteClientService};
