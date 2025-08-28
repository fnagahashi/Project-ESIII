import { Gender } from "../controller/client/Gender";
import { IAddressRequest } from "./IAddressInterface";
import { ICreditCardRequest } from "./ICreditCardInterface";

interface IClientRequest {
    id?: string;
    name: string;
    dateBirth: string;
    cpf: string;
    gender: Gender;
    typePhone:string;
    phone: string;
    email: string;
    password: string;
    address: IAddressRequest[];
    creditCard: ICreditCardRequest[];
    obs?: string;
}

export { IClientRequest }