import { Request, Response } from "express";
import { UpdatePasswordService } from "../../service/Password/UpdatePasswordService";

class UpdatePasswordController {
  private updatePasswordService = new UpdatePasswordService();

  handle = async (request: Request, response: Response) => {
    try {
      const { oldPassword, newPassword } = request.body;
      const userId = Number(request.user_id); 

      const result = await this.updatePasswordService.execute({
        userId,
        oldPassword,
        newPassword,
      });

      response.status(200).json(result);
    } catch (error: any) {
      response.status(400).json({ error: error.message });
    }
  }
}

export { UpdatePasswordController };
