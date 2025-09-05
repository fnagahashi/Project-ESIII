import { Request, Response } from "express";
import { DeleteAddressService } from "../../service/Address/DeleteAddressService";

class DeleteAddressController {
  async handle(request: Request, response: Response) {
    try {
      const id = request.params.id;
      const deleteAddressService = new DeleteAddressService();
      const msg = await deleteAddressService.execute(id);
      return response.status(200).json(msg);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}
export { DeleteAddressController };