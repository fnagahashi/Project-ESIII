import { Request, Response } from "express";
import { AutenticationService } from "../../service/Autentication/AutenticationService";

class AutenticationController {
    async handle(request: Request, response: Response) {
      const { email, password } = request.body;
      const autenticationService = new AutenticationService();
     const user = await autenticationService.execute(
      { email,
         password,
      },

     ); 
      response.json(user);
    }
  }
  export { AutenticationController };