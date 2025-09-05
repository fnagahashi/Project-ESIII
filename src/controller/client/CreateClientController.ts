import { Request, response, Response } from "express";
import { CreateClientService } from "../../service/Client/CreateClientService";

class CreateClientController {
  async handle(request: Request, response: Response) {
    const { name,
      dateBirth,
      cpf,
      gender,
      typePhone,
      phone,
      email,
      password,
      addresses,
      creditCards,
      obs, } = request.body;
    const createClientService = new CreateClientService();
   const client = await createClientService.execute(
   {
      name,
      dateBirth,
      cpf,
      gender,
      typePhone,
      phone,
      email,
      password,
      addresses,
      creditCards,
      obs,
    });
    response.status(201).json({message:"Cliente cadastrado!", client});
  } catch (error: any) {
    return response.status(400).json({ error: error.message });
  }
}
export { CreateClientController };