import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repository/RoomRepositories";

class DeleteProductService{
    async execute(id: string) {
        const productRepository = getCustomRepository(ProductRepositories);
        const product = await productRepository.findOne(id);

        if (!product) {
            throw new Error("Produto não encontrado");
        }

        await productRepository.remove(product);

        return {message: "Produto deletado com sucesso"};

    }
}
export{DeleteProductService};
