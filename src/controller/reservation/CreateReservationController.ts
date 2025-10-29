import { Request, Response } from "express";
import { Guest } from "../../entities/guest";
import { room } from "../../entities/room";


class CreateReservationController {
  async handle(request: Request, response: Response) {
    const { datecheckIn, datecheckOut, noShow, qntAdultos, qntCriancas } = request.body;

   const reservation = 
   {
      datecheckIn: datecheckIn,
      datecheckOut: datecheckOut,
      noShow: noShow,
      qntAdultos: qntAdultos,
      qntCriancas: qntCriancas,
      Guest: Guest,
      room: room,
    }; 
    response.json({message:"Reserva cadastrada!"});
  }
}
export { CreateReservationController };