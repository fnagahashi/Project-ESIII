import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repository/PaymentRepositories";

class ListCategoryService{
    async execute(){
        const categoryRepository = getCustomRepository(CategoryRepositories);
        const category = await categoryRepository.find(); 
        return category;
    }
}
export {ListCategoryService};