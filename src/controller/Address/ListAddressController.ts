import { Request, Response } from "express";
import { ListAddressService } from "../../service/Address/ListAddressService";

export class ListAddressController {
    async handle (request: Request, response: Response) {
        try {
            const listAddressService = new ListAddressService();
            const addresses = await listAddressService.execute();
            return response.status(200).json(addresses);
        } catch (error: any) {
            return response.status(400).json({ error: error.message });
        }
    }
}
