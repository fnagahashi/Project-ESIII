import { Request, Response } from "express";
import { DeletedogService } from "../../service/Dog/DeletedogService";

class DeletedogController {
  async handle(request: Request, response: Response) {
    
    const id = request.params.id;
    const deletedogService = new DeletedogService();
    const msg = await deletedogService.execute(id);
    
    response.json(msg);
  }
}
export { DeletedogController };