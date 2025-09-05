import { Request, Response } from "express";
import { UpdateAddressService } from "../../service/Address/UpdateAddressService";

class UpdateAddressController {
  async handle(request: Request, response: Response) {
    try {
      const { nameAddress, cep, streetType, street, neighborhood, number, city, state, country, typeResidence, typeAddress, obs } = request.body;
      const { id } = request.params;

      const updateAddressService = new UpdateAddressService();
      const address = await updateAddressService.execute({
        id,
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
        obs
      });

      return response.status(200).json({ 
        message: `Endereço ${id} atualizado`, 
        address 
      });
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { UpdateAddressController };
