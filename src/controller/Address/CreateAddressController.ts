import { Request, Response } from "express";
import { CreateAddressService } from "../../service/Address/CreateAddressService";


class CreateAddressController {
  async handle(request: Request, response: Response) {
  const { cep, street, neighborhood, number, city, state, obs } = request.body;
  const clientId = request.body.clientId;
  const createAddressService = new CreateAddressService();
  const address = await createAddressService.execute(
  {street,
    cep,
    neighborhood,
    number,
    city,
    state,
    obs,
    clientId
  }); 
  response.json(address);
  }
}
export { CreateAddressController };