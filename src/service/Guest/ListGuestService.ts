import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../../repository/GuestRepositories";

export class ListClientService {
    async execute () {
        const clientRepository = getCustomRepository(ClientRepositories);
        const clients = await clientRepository.find({
            select: [
                "id",
                "name",
                "dateBirth",
                "cpf",
                "gender",
                "typePhone",
                "phone",
                "email",
                "created_at",
                "updated_at"
            ],
            relations: ["addresses", "creditCards"]
        });

        return {
            total: clients.length,
            clients: clients
        };
    }
}
