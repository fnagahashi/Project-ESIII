import { getCustomRepository } from "typeorm";
import { IProductRequest } from "../../Interface/IProductInterface";
import { ProductRepositories } from "../../repository/ProductRepositories";

class CreateProductService {
    async execute ({name, category, desc, price}: IProductRequest){
        if (!name) {
            throw new Error ("Nome obrigatorio");
        }
        const productRepository = getCustomRepository(ProductRepositories); 
        const productAlreadyExists = await productRepository.findOne({ name, });

        if (productAlreadyExists) {
            throw new Error("Produto já existe");
        }

        const product = productRepository.create({ name, category, desc, price, });
        await productRepository.save(product);

        return product;
    }
}
export {CreateProductService};