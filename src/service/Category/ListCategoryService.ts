import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repository/CategoryRepositories";

class ListCategoryService{
    async execute(){
        const categoryRepository = getCustomRepository(CategoryRepositories);
        const category = await categoryRepository.find(); 
        return category;
    }
}
export {ListCategoryService};