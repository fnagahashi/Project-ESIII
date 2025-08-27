import { Request, Response } from "express";
import { CreateProductService } from "../../service/Product/CreateProductService";

class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, category, desc, price } = request.body;
    const createProductService = new CreateProductService();
   const product = await createProductService.execute(
   {
      name,
      category,
      desc,
      price,
    }); 
    response.json({message:"Produto cadastrado!"});
  }
}
export { CreateProductController };