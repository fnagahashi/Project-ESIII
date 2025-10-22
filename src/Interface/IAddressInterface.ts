import { IClientRequest } from "./IGuestInterface";

type AddressType = 'billing' | 'delivery';
interface IAddressRequest {
    id?: string;
    cep: string;
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    number: string;
    obs?: string;
    clientId?: string;
}

export { IAddressRequest}