import { Request, Response } from "express";
import { CreateAddressService } from "../../service/Address/CreateAddressService";


class CreateAddressController {
  async handle(request: Request, response: Response) {
    const { nameAddress, cep, street, city, state, country, number, typeResidence, obs, typeAddress } = request.body;
    const createAddressService = new CreateAddressService();
   const address = await createAddressService.execute(
   {
      nameAddress,
      cep,
      street,
      city,
      state,
      country,
      number,
      typeResidence,
      obs,
      typeAddress
    }); 
    response.json(address);
  }
}
export { CreateAddressController };