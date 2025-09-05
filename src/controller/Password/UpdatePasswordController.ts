import { Response } from "express";
import { AuthRequest } from "../../Interface/AuthRequest";
import { UpdatePasswordService } from "../../service/Password/UpdatePasswordService";

class UpdatePasswordController {
  handle = async (req: AuthRequest, res: Response) => {
    try {
      const { oldPassword, newPassword } = req.body;
      const userId = req.userId; // camelCase agora

      const updatePasswordService = new UpdatePasswordService();
      await updatePasswordService.execute({
        userId,
        oldPassword,
        newPassword,
      });

      res.status(200).json({ message: "Senha atualizada com sucesso!" });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };
}

export { UpdatePasswordController };
