import { Request, Response } from "express";
import { ListSalesService } from "../../service/Sales/ListSalesService";


export class ListSalesController {
    async handle (request: Request, response: Response) {
        const listSalesService = new ListSalesService();
        const sales = await listSalesService.execute();
       
        response.json(sales);   
    }
}
