import { Request, Response } from "express";
import { CreateSalesService } from "../../service/Sales/CreateSalesService";

class CreateSalesController {
  async handle(request: Request, response: Response) {
    const { date, qtd, price, product, client, total  } = request.body;
    
   const sale = 
   {
      date,
      qtd,
      price,
      product,
      client,
      total
    }; 
    response.json({message:"Venda cadastrada!"});
  }
}
export { CreateSalesController };