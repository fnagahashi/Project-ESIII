import { Request, Response } from "express";
import { UpdateClientService } from "../../service/Client/UpdateClientService";

class UpdateClientController {
  async handle(request: Request, response: Response) {
    try {
      const { name, dateBirth, cpf, gender, typePhone, phone, email, password, obs } = request.body;
      const { id } = request.params;

      const updateClientService = new UpdateClientService();
      const client = await updateClientService.execute({
        id,
        name,
        dateBirth,
        cpf,
        gender,
        typePhone,
        phone,
        email,
        addresses: [],
        creditCards: [],
        password,
        obs
      });

      return response.status(200).json({ message: `Cliente ${id} atualizado`, client });
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { UpdateClientController };
