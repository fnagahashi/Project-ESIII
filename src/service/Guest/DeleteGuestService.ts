import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../../repository/GuestRepositories";

class DeleteClientService{
    async execute(id: string) {
        const clientRepository = getCustomRepository(ClientRepositories);
        const client = await clientRepository.findOne(id);
        if (!client) {
            throw new Error("Cliente não encontrado");
        }
        await clientRepository.softRemove(client);

        return { id, message: "Cliente deletado com sucesso" };
    }
}
export{DeleteClientService};
