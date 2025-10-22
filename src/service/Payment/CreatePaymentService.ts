import { IPaymentRequest } from "../../Interface/IPaymentInterface";
import { PaymentRepositories } from "../../repository/PaymentRepositories";
import { getCustomRepository } from "typeorm";

class CreateCategoryService {
    async execute ({name}: ICategoryRequest){
        if (!name) {
            throw new Error ("Nome Obrigatório");
        }

        const categoryRepository = getCustomRepository(CategoryRepositories);
        const categoryAlreadyExists = await categoryRepository.findOne({ name });

        if (categoryAlreadyExists) {
            throw new Error("Categoria já existe");
        }
       const category = categoryRepository.create({ name }); 
       await categoryRepository.save(category);
        return category;
    }
}
export {CreateCategoryService};