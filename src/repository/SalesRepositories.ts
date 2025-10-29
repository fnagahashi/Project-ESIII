import { EntityRepository, Repository } from "typeorm";
import { sales } from "../entities/reservation";

@EntityRepository(sales)
class SalesRepositories extends Repository<sales> {}

export { SalesRepositories };