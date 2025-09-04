import { Brand } from "../controller/creditCard/Brand";

interface ICreditCardRequest{
    id?: string;
    cardNumber: string;
    cardName: string;
    brand: Brand;
    securityCode: string;
    clientId?: string;
}
export{ICreditCardRequest}