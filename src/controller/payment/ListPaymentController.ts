import { Request, Response } from "express";
import { ListCategoryService } from "../../service/Payment/ListCategoryService";

export class ListCategoryController {
    async handle (request: Request, response: Response) {
        const listCategoryService = new ListCategoryService();
        const category = await listCategoryService.execute();
        
        response.json(category);   
    }
}
