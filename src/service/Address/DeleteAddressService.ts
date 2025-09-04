import { getCustomRepository } from "typeorm";
import { AddressRepositories } from "../../repository/AddressRepositories";

class DeleteAddressService{
    async execute(id: string) {
        const addressRepository = getCustomRepository(AddressRepositories);
        const address = await addressRepository.findOne(id);

        if (!address) {
            throw new Error("Endereço não encontrado");
        }

        await addressRepository.remove(address);

        return {id, message: "Endereço deletado com sucesso"};

    }
}
export{DeleteAddressService};
