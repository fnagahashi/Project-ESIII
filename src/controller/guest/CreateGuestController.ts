import { Request, Response } from "express";
import { CreateGuestService } from "../../service/Guest/CreateGuestService";

class CreateGuestController {
  async handle(request: Request, response: Response) {
    try {
      const { name,
        dateBirth,
        cpf,
        phone,
        email,
        isActive,
        addresses,
        obs, } = request.body;

      const createGuestService = new CreateGuestService();
      const client = await createGuestService.execute(
      {
        name,
        dateBirth,
        cpf,
        phone,
        email,
        isActive,
        addresses,
        obs,
      });
      return response.status(201).json({message:"Cliente cadastrado!", client});
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}
export { CreateGuestController };