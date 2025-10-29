import { Request, Response } from "express";
import { ListProductService } from "../../service/Room/ListRoomService";

export class ListProductController {
    async handle (request: Request, response: Response) {
        const listProductService = new ListProductService();
        const product = await listProductService.execute();
         
        response.json(product);   
    }
}
