import { Request, Response } from "express";
import { ListdogService } from "../../service/Dog/ListdogService";

export class ListdogController {
    async handle (request: Request, response: Response) {
        const listdogService = new ListdogService();
        const dog = await listdogService.execute();
         
        response.json(dog);   
    }
}
