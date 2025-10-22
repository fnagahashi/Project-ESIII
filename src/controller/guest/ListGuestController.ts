import { Request, Response } from "express";
import { ListClientService } from "../../service/Guest/ListGuestService";

class ListClientController {
    async handle(request: Request, response: Response) {
        try {
            const listClientService = new ListClientService();
            const client = await listClientService.execute();
            response.status(200).json(client);
        } catch (error: any) {
            response.status(400).json({ error: error.message });
        }
    }
}
export { ListClientController };
