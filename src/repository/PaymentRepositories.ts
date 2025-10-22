import { EntityRepository, Repository } from "typeorm";
import { payment } from "../entities/payment";

@EntityRepository(payment)
class PaymentRepositories extends Repository<payment> {}

export { PaymentRepositories };