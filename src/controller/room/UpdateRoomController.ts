import { Request, Response } from "express";
import { UpdateProductService } from "../../service/Room/UpdateRoomService";

class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { name, category, desc, price } = request.body;
    const id = request.params.id;
    const updateProductService = new UpdateProductService();
    const product = await updateProductService.execute(
    {
      id,
      name,
      category,
      desc,
      price,
    });
    response.json({message:`Produto ${id} atualizado`});
  }
}
export { UpdateProductController };