import { EntityRepository, Repository } from "typeorm";
import { dog } from "../entities/creditCard";

@EntityRepository(dog)
class DogRepositories extends Repository<dog> {}

export { DogRepositories };