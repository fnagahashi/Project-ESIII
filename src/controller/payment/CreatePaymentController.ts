import { Request, Response } from "express";
import { CreatePaymentService } from "../../service/Payment/CreatePaymentService";

class CreatePaymentController {
  async handle(request: Request, response: Response) {
    const { amount, method, status } = request.body;
    const createPaymentService = new CreatePaymentService();
    const payment = await createPaymentService.execute(
   {
      valor,
      formaPagamento,
      isPaid,
    }); 
    response.json(payment);
  }
}
export { CreatePaymentController };