import { getCustomRepository } from "typeorm";
import { IRoomRequest } from "../../Interface/IRoomInterface";
import { RoomRepositories } from "../../repository/RoomRepositories";

class CreateRoomService {
    async execute ({roomCode, type, isActive}: IRoomRequest){
        if (!type) {
            throw new Error ("Tipo obrigatorio");
        }
        const roomRepository = getCustomRepository(RoomRepositories);
        const roomAlreadyExists = await roomRepository.findOne({ roomCode })

        if (roomAlreadyExists) {
            throw new Error("Quarto já existe");
        }

        const room = roomRepository.create({ roomCode, type, isActive });
        await roomRepository.save(room);

        return room;
    }
}
export {CreateRoomService};