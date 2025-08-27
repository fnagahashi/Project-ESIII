import { getCustomRepository } from "typeorm";
import { IDogRequest } from "../../Interface/ICreditCardInterface";
import { DogRepositories } from "../../repository/DogRepositories";


class CreatedogService {
    async execute ({ name, breed, owner, color, address, age }: IDogRequest){
        if (!name) {
            throw new Error ("Nome obrigatorio");
        }
        const dogRepository = getCustomRepository(DogRepositories); 

        const dog = dogRepository.create({ name, breed, owner, color, address, age });
        await dogRepository.save(dog);

        return dog;
    }
}
export {CreatedogService};