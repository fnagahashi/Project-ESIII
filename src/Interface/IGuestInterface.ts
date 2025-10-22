import { IAddressRequest } from "./IAddressInterface";

interface IGuestRequest {
    id?: string;
    name: string;
    dateBirth: string;
    cpf: string;
    phone: string;
    email: string;
    isActive: boolean;
    addresses: IAddressRequest[];
    obs?: string;
}

export { IGuestRequest }