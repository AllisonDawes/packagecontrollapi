import { getRepository } from "typeorm";

import AppError from "../../errors/AppError";

import User from "../../models/User";
import Package from "../../models/Package";

interface IRequest {
  admin_id: string;
  package_id: string;
}

class DeletePackageService {
  public async execute({ admin_id, package_id }: IRequest): Promise<void> {
    const userRespository = getRepository(User);
    const packageRespository = getRepository(Package);

    const admin = await userRespository.findOne({
      where: { id: admin_id, admin: true },
    });

    if (!admin) {
      throw new AppError("Usuário não encontrado, ou não tem permissão", 400);
    }

    const findPackage = await packageRespository.findOne({
      where: { id: package_id },
    });

    if (!findPackage) {
      throw new AppError("Embalagem Não encontrada!", 400);
    }

    await packageRespository.remove(findPackage);

    return;
  }
}

export default DeletePackageService;
