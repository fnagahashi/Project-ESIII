import { Request, Response } from "express";
import { CreateCreditCardService } from "../../service/CreditCard/CreateCreditCardService";
import { Brand } from "./Brand";

class CreateCreditCardController {
  async handle(request: Request, response: Response) {
    const { cardNumber,
        cardName,
        brand,
        securityCode,
        clientId } = request.body;
    const createCreditCardService = new CreateCreditCardService();
    const creditCard = await createCreditCardService.execute(
      {
        cardNumber,
        cardName,
        brand,
        securityCode,
        clientId
      }
    );
    response.json({ message: "Cartão de crédito cadastrado!" });
  }
}
export { CreateCreditCardController };