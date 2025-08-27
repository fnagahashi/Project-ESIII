import { Request, Response } from "express";
import { CreateClientService } from "../../service/Client/CreateClientService";
import { Brand } from "./Brand";

class CreateCreditCardController {
  async handle(request: Request, response: Response) {
    const { number,
        name,
        brand,
        securityCode,
        clientId } = request.body;
    const createCreditCardService = new CreateCreditCardService();
    const creditCard = await createCreditCardService.execute(
      {
        number,
        name,
        brand,
        securityCode,
        clientId
      }
    );
    response.json({ message: "Cartão de crédito cadastrado!" });
  }
}
export { CreateCreditCardController };