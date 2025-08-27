import { Request, Response } from "express";
import { DeleteSalesService } from "../../service/Sales/DeleteSalesService";

class DeleteSalesController {
  async handle(request: Request, response: Response) {
    
    const id = request.params.id;
    const deleteSalesService = new DeleteSalesService();
    const msg = await deleteSalesService.execute(id);
    
    response.json(msg);
  }
}
export { DeleteSalesController };