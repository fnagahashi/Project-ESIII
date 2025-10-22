import { Request, Response } from "express";
import { UpdateCategoryService } from "../../service/Payment/UpdateCategoryService";

class UpdateCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const id = request.params.id;
    const updateCategoryService = new UpdateCategoryService();
   const category = await updateCategoryService.execute(
   {
    id,
      name,
    }); 
    response.json({message:`Categoria ${id} atualizada`});
  }
}
export { UpdateCategoryController };