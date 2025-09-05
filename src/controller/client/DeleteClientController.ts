import { Request, Response } from "express";
import { DeleteClientService } from "../../service/Client/DeleteClientService";

class DeleteClientController {
  async handle(request: Request, response: Response) {
    try {
      const id = request.params.id;
      const deleteClientService = new DeleteClientService();
      const msg = await deleteClientService.execute(id);
      response.status(200).json(msg);
    } catch (error: any) {
      response.status(400).json({ error: error.message });
    }
  }
}
export { DeleteClientController };