type AddressType = 'billing' | 'delivery';
interface IAddressRequest {
    id?: string;
    nameAddress: string;
    cep: string;
    streetType: string;
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    number: string;
    typeResidence: string;
    obs?: string;
    typeAddress: AddressType;
    clientId: string;
}

export { IAddressRequest}