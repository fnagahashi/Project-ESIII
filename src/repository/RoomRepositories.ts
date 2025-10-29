import { EntityRepository, Repository } from "typeorm";
import { room } from "../entities/room";

@EntityRepository(room)
class RoomRepositories extends Repository<room> {}

export { RoomRepositories };