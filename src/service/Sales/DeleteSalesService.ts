import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../../repository/SalesRepositories";

class DeleteSalesService{
    async execute(id: string) {
        const salesRepository = getCustomRepository(SalesRepositories);
        const sales = await salesRepository.findOne(id);
        if (!sales) {
            throw new Error("Venda não encontrada");
        }
       await salesRepository.remove(sales);

        return { message: "Venda deletada com sucesso" };
    }
}
export{DeleteSalesService};
