import { Request, Response } from "express";
import { CreateRoomService } from "../../service/Room/CreateRoomService";

class CreateRoomController {
  async handle(request: Request, response: Response) {
    const { roomCode, type, isActive } = request.body;
    const createRoomService = new CreateRoomService();
   const room = await createRoomService.execute(
   { 
    roomCode,
    type,
      isActive,
    }); 
    response.json({message:"Quarto cadastrado!"});
  }
}
export { CreateRoomController };