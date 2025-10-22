import { Request, Response } from "express";
import { UpdateClientService } from "../../service/Guest/UpdateGuestService";

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

      response.status(200).json({ message: `Cliente ${client.name} atualizado`, client });
    } catch (error: any) {
      response.status(400).json({ error: error.message });
    }
  }
}

export { UpdateClientController };
