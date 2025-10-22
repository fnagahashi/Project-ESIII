interface IPaymentRequest {
    id?: string;
    valor: string;
    formaPagamento: string;
    isPaid: boolean;
}

export { IPaymentRequest }