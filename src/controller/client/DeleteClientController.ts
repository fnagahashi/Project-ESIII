import { Request, Response } from "express";
import { DeleteClientService } from "../../service/Client/DeleteClientService";

class DeleteClientController {
  async handle(request: Request, response: Response) {
    
    const id = request.params.id;
    const deleteClientService = new DeleteClientService();
    const msg = await deleteClientService.execute(id);
    
    response.json(msg);
  }
}
export { DeleteClientController };