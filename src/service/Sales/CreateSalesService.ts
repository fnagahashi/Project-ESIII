import { getCustomRepository } from "typeorm";
import { ISalesRequest } from "../../Interface/ISalesInterface";
import { SalesRepositories } from "../../repository/SalesRepositories";


class CreateSalesService {
    async execute ({date, qtd, price, product, client, total}: ISalesRequest){
        if (!product) {
            throw new Error ("Deve haver produto");
        }
        const salesRepository = getCustomRepository(SalesRepositories);
        const salesAlreadyExist = await salesRepository.findOne({ product, client });
        if (salesAlreadyExist) {
            throw new Error("Venda já computada");
        }

        const sales = salesRepository.create({ date, qtd, price, product, client, total });
        await salesRepository.save(sales);
        return sales;
    }
}
export {CreateSalesService};