import { Request, Response } from "express";
import { CreateCreditCardService } from "../../service/CreditCard/CreateCreditCardService";
import { Brand } from "./Brand";

class CreateCreditCardController {
  async handle(request: Request, response: Response) {
    try {
    const { cardName, cardNumber, brand, securityCode, clientId } = request.body;
    const createCreditCardService = new CreateCreditCardService();
    const creditCard = await createCreditCardService.execute(
      {
        cardName,
        cardNumber,
        brand,
        securityCode,
        clientId
      }
    );
    return response.status(201).json({ message: "Cartão de crédito cadastrado!", creditCard });
  } catch (error: any) {
    return response.status(400).json({ error: error.message });
  }
}
}
export { CreateCreditCardController };