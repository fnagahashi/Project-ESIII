import { Request, Response } from "express";
import { UpdatedogService } from "../../service/Dog/UpdatedogService";

class UpdatedogController {
  async handle(request: Request, response: Response) {
    const { name, breed, owner, color, address, age } = request.body;
    const id = request.params.id;
    const updatedogService = new UpdatedogService();
    const dog = await updatedogService.execute(
        {
            name:name,
            breed:breed,
            owner:owner,
            color:color,
            address:address,
            age:age
        });
    response.json({message:`Produto ${id} atualizado`});
  }
}
export { UpdatedogController };