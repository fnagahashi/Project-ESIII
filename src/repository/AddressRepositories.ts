import { EntityRepository, Repository } from "typeorm";
import { Address } from "../entities/address";

@EntityRepository(Address)
class AddressRepositories extends Repository<Address> {}

export { AddressRepositories };