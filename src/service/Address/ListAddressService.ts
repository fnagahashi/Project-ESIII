import { getCustomRepository } from "typeorm";
import { AddressRepositories } from "../../repository/AddressRepositories";

class ListAddressService {
    async execute () {
        const addressRepository = getCustomRepository(AddressRepositories);
        const address = await addressRepository.find({
            relations: ["client"],
            select: [
                "id",
                "nameAddress",
                "cep",
                "streetType",
                "street",
                "neighborhood",
                "number",
                "city",
                "state",
                "country",
                "typeResidence",
                "typeAddress",
                "obs",
                "created_at",
                "updated_at"
            ]
        });
        return {
            total: address.length,
            address: address
        };   
    }
}
export {ListAddressService};
