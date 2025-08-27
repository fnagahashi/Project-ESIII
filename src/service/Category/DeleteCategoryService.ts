import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repository/CategoryRepositories";

class DeleteCategoryService{
    async execute(id: string) {
        const categoryRepository = getCustomRepository(CategoryRepositories);
        const category = await categoryRepository.findOne(id);
        if (!category) {
            throw new Error("Categoria não encontrada");
        }
        await categoryRepository.remove(category);

        return { message: "Categoria deletada com sucesso" };
    }
}
export{DeleteCategoryService};