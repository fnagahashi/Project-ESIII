import { Request, Response } from "express";
import { ListUserService } from "../../service/User/ListUserService";

class ListUserController {
    async handle (request: Request, response: Response) {
        const listUserService = new ListUserService();
        const users = await listUserService.execute();
        response.json(users);   
    };
}
export {ListUserController};
