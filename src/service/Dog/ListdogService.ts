import { getCustomRepository } from "typeorm";
import { DogRepositories } from "../../repository/DogRepositories";

class ListdogService {
    async execute () {
        const dogRepository = getCustomRepository(DogRepositories);
        const product = await dogRepository.find();
        return product;   
    }
}
export {ListdogService};
