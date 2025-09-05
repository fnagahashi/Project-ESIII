import { Request, Response } from "express";
import { ListClientService } from "../../service/Client/ListClientService";

export class ListClientController {
    async handle (request: Request, response: Response) {
        try {
            const listClientService = new ListClientService();
            const client = await listClientService.execute();
            return response.status(200).json(client);
        } catch (error: any) {
            return response.status(400).json({ error: error.message });
        }
    }
}
