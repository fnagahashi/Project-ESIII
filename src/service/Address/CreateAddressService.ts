import { IAddressRequest } from "../../Interface/IAddressInterface";
import { AddressRepositories } from "../../repository/AddressRepositories";
import { Client } from "../../entities/client";
import { getCustomRepository, getRepository } from "typeorm";

class CreateAddressService {
    async execute ({ nameAddress, cep, streetType, street, neighborhood, number, city, state, country, typeResidence, typeAddress, obs, clientId }: IAddressRequest){
        if (!nameAddress) {
            throw new Error ("Nome Obrigatório");
        }

        const addressRepository = getCustomRepository(AddressRepositories);
        const clientRepository = getRepository(Client);
        const addressAlreadyExists = await addressRepository.findOne({ nameAddress });

        if (addressAlreadyExists) {
            throw new Error("Endereço já existe");
        }
       const address = addressRepository.create({  
            nameAddress,
            cep,
            streetType,
            street,
            neighborhood,
            number,
            city,
            state,
            country,
            typeResidence,
            typeAddress,
            obs,
            client: { id: clientId } });
       await addressRepository.save(address);

       const allAddresses = await addressRepository.find({ where: { clientId } });

        const hasBilling = allAddresses.some(a => a.typeAddress === "billing");
        const hasDelivery = allAddresses.some(a => a.typeAddress === "delivery");
        if (!hasDelivery) {
            throw new Error("Cliente deve possuir pelo menos um endereço de entrega!");
        }

        if (!hasBilling) {
            throw new Error("Cliente deve possuir pelo menos um endereço de cobrança!");
        }
        return address;
    }
}
export {CreateAddressService};