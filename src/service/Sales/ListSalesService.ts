import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../../repository/SalesRepositories";


class ListSalesService {
    async execute () {
        const salesRepository = getCustomRepository(SalesRepositories);
        const sales = await salesRepository.find(); 
        return sales;   
    }
}
export {ListSalesService};