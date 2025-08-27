import { UsersRepositories } from "../../repository/UsersRepositories";
import { getCustomRepository } from "typeorm";

export default class ListUserService {
   async execute() {
      const userRepository = getCustomRepository(UsersRepositories);
      const users = await userRepository.find();

      return users;
   }
}