import { Request, Response } from "express";
import { CreatedogService } from "../../service/Dog/CreatedogService";

class CreatedogController{
    async handle (request: Request, response: Response) {
        const { name, breed, owner, color, address, age } = request.body;
        const createdogService = new CreatedogService();
        const dog = await createdogService.execute(
            {
                name:name,
                breed:breed,
                owner:owner,
                color:color,
                address:address,
                age:age
            });
        response.json(dog);
    }
}
export { CreatedogController };