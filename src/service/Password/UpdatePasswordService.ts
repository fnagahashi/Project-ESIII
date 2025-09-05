import { getRepository } from "typeorm";
import { User } from "../../entities/User";
import bcrypt from "bcryptjs";

interface IRequest {
  userId: string;
  oldPassword: string;
  newPassword: string;
}

class UpdatePasswordService {
  async execute({ userId, oldPassword, newPassword }: IRequest) {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const passwordMatch = bcrypt.compareSync(oldPassword, user.password);
    if (!passwordMatch) {
      throw new Error("Senha antiga incorreta");
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!regex.test(newPassword)) {
      throw new Error(
        "Nova senha inválida: deve ter mínimo 8 caracteres, letras maiúsculas, minúsculas e caracteres especiais"
      );
    }

    user.password = bcrypt.hashSync(newPassword, 10);
    await userRepository.save(user);

    return { message: "Senha atualizada com sucesso" };
  }
}

export { UpdatePasswordService };
