import { Request, Response } from "express";
import { CreateAddressService } from "../../service/Address/CreateAddressService";


class CreateAddressController {
  async handle(request: Request, response: Response) {
  const { nameAddress, cep, streetType, street, neighborhood, number, city, state, country, typeResidence, typeAddress, obs, clientId } = request.body;
  const createAddressService = new CreateAddressService();
  const address = await createAddressService.execute(
  {
    nameAddress,
    cep,
    streetType,
    street,
    neighborhood,
    number,
    city,
    state,
    country,
    typeResidence,
    typeAddress,
    obs,
    clientId
  }); 
  response.json(address);
  }
}
export { CreateAddressController };