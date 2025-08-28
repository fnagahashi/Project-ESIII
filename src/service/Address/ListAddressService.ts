import { getCustomRepository } from "typeorm";
import { AddressRepositories } from "../../repository/AddressRepositories";

class ListAddressService {
    async execute () {
        const addressRepository = getCustomRepository(AddressRepositories);
        const address = await addressRepository.find({
            relations: ["client"]
        });
        return address;   
    }
}
export {ListAddressService};
