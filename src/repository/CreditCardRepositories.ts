import { EntityRepository, Repository } from "typeorm";
import { CreditCard } from "../entities/creditCard";

@EntityRepository(CreditCard)
class CreditCardRepositories extends Repository<CreditCard> {}

export { CreditCardRepositories };