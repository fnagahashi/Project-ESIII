import { Request, Response } from "express";
import { UpdateSalesService } from "../../service/Sales/UpdateSalesService";

class UpdateSalesController {
  async handle(request: Request, response: Response) {
    const { date, qtd, price, product, client, total  } = request.body;
    const id = request.params.id;
    const updateSalesService = new UpdateSalesService();
    const sale = await updateSalesService.execute(
    {
      id,
       date,
       qtd,
       price,
       product,
       client,
       total
     }); 
    response.json({message:`Venda ${id} atualizada`});
  }
}
export { UpdateSalesController };