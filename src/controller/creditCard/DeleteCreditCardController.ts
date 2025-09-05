import { Request, Response } from "express";
import { DeleteCreditCardService } from "../../service/CreditCard/DeleteCreditCardService";

class DeleteCreditCardController {
  async handle(request: Request, response: Response) {
    try {
      const id = request.params.id;
      const deleteCreditCardService = new DeleteCreditCardService();
      const msg = await deleteCreditCardService.execute(id);
      return response.status(200).json(msg);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}
export { DeleteCreditCardController };