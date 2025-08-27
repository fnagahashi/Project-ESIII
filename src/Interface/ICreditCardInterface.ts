import { Brand } from "../controller/creditCard/Brand";

interface ICreditCardRequest{
    id?: string;
    number: string;
    name: string;
    brand?: Brand;
    securityCode: string;
}
export{ICreditCardRequest}