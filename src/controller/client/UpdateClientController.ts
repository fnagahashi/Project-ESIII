import { Request, Response } from "express";
import { UpdateClientService } from "../../service/Client/UpdateClientService";

class UpdateClientController {
  async handle(request: Request, response: Response) {
    const { name, tel, email, endereco, bairro, cidade, uf } = request.body;
    const id = request.params.id;
    const updateClientService = new UpdateClientService();
   const client = await updateClientService.execute(
   {
    id,
      name,
      tel,
      email,
      endereco,
      bairro,
      cidade,
      uf
    }); 
    response.json({message:`Cliente ${id} atualizado`});
  }
}
export { UpdateClientController };