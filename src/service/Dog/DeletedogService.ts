import { getCustomRepository } from "typeorm";
import { DogRepositories } from "../../repository/DogRepositories";

class DeletedogService{
    async execute(id: string) {
        const dogRepository = getCustomRepository(DogRepositories);
        const dog = await dogRepository.findOne(id);

        if (!dog) {
            throw new Error("Cahorro não encontrado");
        }

        await dogRepository.remove(dog);

        return {message: "Elemento deletado com sucesso"};

    }
}
export{DeletedogService};
