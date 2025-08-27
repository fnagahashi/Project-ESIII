import { getCustomRepository } from "typeorm";
import { IDogRequest } from "../../Interface/ICreditCardInterface";
import { DogRepositories } from "../../repository/DogRepositories";


class UpdatedogService {
    async execute ({id,  name, breed, owner, color, address, age }: IDogRequest){
        if (!name) {
            throw new Error ("Nome obrigatorio");
        }
        const dogRepository = getCustomRepository(DogRepositories);
        const dog = await dogRepository.findOne(id);
        
        if (name) {
            dog.name = name;
        }
        if (breed) {
            dog.breed = breed;
        }
        if (owner) {
            dog.owner = owner;
        }
        if (color) {
            dog.color = color;
        }
        if (address) {
            dog.address = address;
        }
        
        await dogRepository.update(id, dog);
        
        return dog;
    }
}
export {UpdatedogService};