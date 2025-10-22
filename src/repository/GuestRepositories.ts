import { EntityRepository, Repository } from "typeorm";
import { Guest } from "../entities/guest";

@EntityRepository(Guest)
class GuestRepositories extends Repository<Guest> {}

export { GuestRepositories };