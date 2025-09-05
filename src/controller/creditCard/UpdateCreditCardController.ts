import { Request, Response } from "express";
import { UpdateCreditCardService } from "../../service/CreditCard/UpdateCreditCardService";

class UpdateCreditCardController {
  async handle(request: Request, response: Response) {
    try {
      const { cardName, cardNumber, brand, securityCode } = request.body;
      const { id } = request.params;

      const updateCreditCardService = new UpdateCreditCardService();
      const creditCard = await updateCreditCardService.execute({
        id,
        cardName,
        cardNumber,
        brand,
        securityCode
      });

      const safeCreditCard = {
        id: creditCard.id,
        cardName: creditCard.cardName,
        cardNumber: creditCard.cardNumber.slice(-4), // últimos 4 dígitos
        brand: creditCard.brand,
      };

      return response.status(200).json({ 
        message: `Cartão de crédito ${id} atualizado`, 
        creditCard: safeCreditCard 
      });
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { UpdateCreditCardController };
