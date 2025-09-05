import{sign} from "jsonwebtoken";
import {compare, hash} from "bcryptjs";
import { IUserRequest } from "../../Interface/IUserinterface";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repository/UsersRepositories";

class AutenticationService {
    async execute ({email, password}: IUserRequest){
        if (!email) {
            throw new Error("Email incorreto");
        }
        if (!password){
            throw new Error("Password incorreto");
        }
    const usersRepository = getCustomRepository(UsersRepositories);
    const userAlreadyExists = await usersRepository.findOne({ where: { email: email },});
    if (!userAlreadyExists) {
        throw new Error("Usuario nao encontrado");
    }
    const passwordMatch = await compare(password, userAlreadyExists.password);

      if (!passwordMatch) {
         throw new Error("Senha incorreta");
    }
    //Gerar token
    const token = sign(
        {
            email: email,
        },
        "ecommerce",
        {
            subject: ("others"),
            expiresIn: "1d",
        }
    );
    return token;
    }
}
export {AutenticationService};