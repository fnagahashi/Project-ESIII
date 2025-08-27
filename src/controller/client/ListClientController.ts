import { Request, Response } from "express";
import { ListClientService } from "../../service/Client/ListClientService";

export class ListClientController {
    async handle (request: Request, response: Response) {
        const listClientService = new ListClientService();
        const client = await listClientService.execute();
        response.json(client);   
    }
}
