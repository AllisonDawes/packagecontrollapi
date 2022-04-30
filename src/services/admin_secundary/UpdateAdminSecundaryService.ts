import { getRepository } from "typeorm";

import AppError from "../../errors/AppError";

import User from "../../models/User";

interface IRequest {
  admin_id: string;
  user_id: string;
  adminSecundary: boolean;
}

class UpdateAdminSecundaryService {
  public async execute({
    admin_id,
    user_id,
    adminSecundary,
  }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);

    const findUseradmin = await usersRepository.findOne({
      where: { id: admin_id, admin: true },
    });

    if (!findUseradmin) {
      throw new AppError("Usuário não tem permissão!", 400);
    }

    const userAdminSecundary = await usersRepository.findOne({
      where: { id: user_id },
    });

    if (!userAdminSecundary) {
      throw new AppError("Usuário não encontrado!", 400);
    }

    userAdminSecundary.admin_secundary = adminSecundary;

    await usersRepository.save(userAdminSecundary);

    return userAdminSecundary;
  }
}

export default UpdateAdminSecundaryService;
