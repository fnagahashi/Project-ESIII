import { Request, Response } from "express";
import { ListCreditCardService } from "../../service/CreditCard/ListCreditCardService";

export class ListCreditCardController {
    async handle (request: Request, response: Response) {
        try {
            const listCreditCardService = new ListCreditCardService();
            const creditCards = await listCreditCardService.execute();
            return response.status(200).json(creditCards);
        } catch (error: any) {
            return response.status(400).json({ error: error.message });
        }
    }
}
