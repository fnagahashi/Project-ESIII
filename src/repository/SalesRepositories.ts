import { EntityRepository, Repository } from "typeorm";
import { sales } from "../entities/sales";

@EntityRepository(sales)
class SalesRepositories extends Repository<sales> {}

export { SalesRepositories };