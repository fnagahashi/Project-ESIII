import { ICategoryRequest } from "./IPaymentInterface";

interface IBooksRequest {
    id?: string;
    author: string;
    category: ICategoryRequest;
    year: string;
    title: string;
    publisher: string;
    ISBN: string;
    numberPages: number;
    synopsis: string;
    width: number;
    height: number;
    depth: number;
    weight: number;
    pricingGroup: IPricingGroupRequest;
    barCode: string;
}

export { IBooksRequest }