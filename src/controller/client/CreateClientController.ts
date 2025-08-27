import { Request, Response } from "express";
import { CreateClientService } from "../../service/Client/CreateClientService";

class CreateClientController {
  async handle(request: Request, response: Response) {
    const { name, tel, email, endereco, bairro, cidade, uf } = request.body;
    const createClientService = new CreateClientService();
   const client = await createClientService.execute(
   {
      name,
      dateBirth,
      cpf,
      gender,
      phone,
      email,
    password,
    typeResidence,
    typeAddress,
    residentialAddress,
    paymentAddress,
    deliveryAddress,
    neighborhood,
    cep,
    number,
    city,
    state,
    country,
    creditCard: 
    obs
    });
    response.json({message:"Cliente cadastrado!"});
  }
}
export { CreateClientController };