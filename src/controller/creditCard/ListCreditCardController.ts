import { Request, Response } from "express";
import { ListCreditCardService } from "../../service/CreditCard/ListCreditCardService";

export class ListCreditCardController {
    async handle (request: Request, response: Response) {
        try {
            const listCreditCardService = new ListCreditCardService();
            const creditCards = await listCreditCardService.execute();
            response.status(200).json(creditCards);
        } catch (error: any) {
            response.status(400).json({ error: error.message });
        }
    }
}
