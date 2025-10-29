import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repository/RoomRepositories";

class ListProductService {
    async execute () {
        const productRepository = getCustomRepository(ProductRepositories);
        const product = await productRepository.find();
        return product;   
    }
}
export {ListProductService};
