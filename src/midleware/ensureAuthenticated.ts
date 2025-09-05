import  { Request, Response, NextFunction } from 'express';
import {verify} from "jsonwebtoken"

interface IPayload{
    sub: string; email: string;
}

declare global {
  namespace Express {
    interface Request {
      user_id?: string;
    }
  }
}

export function ensureAuthenticated (request: Request, response: Response, next: NextFunction){
    //Receber o token
    const authToken = request.headers.authorization;
    //Validar se token está preenchido
    if (!authToken){
        response.status(401).end();
        return;
    }
    const [, token] = authToken.split(" ");
    try{
        //Validar se token é valido
        const {sub, email} = verify(token, "ecommerce") as IPayload;
        console.log(email);
        console.log(sub);
        //return 
        next();
    } 
    catch(err){
        response.status(401).end();
    }
}