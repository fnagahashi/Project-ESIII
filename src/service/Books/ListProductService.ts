import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repository/ProductRepositories";

class ListProductService {
    async execute () {
        const productRepository = getCustomRepository(ProductRepositories);
        const product = await productRepository.find();
        return product;   
    }
}
export {ListProductService};
