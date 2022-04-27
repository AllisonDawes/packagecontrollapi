import { getRepository } from "typeorm";

import AppError from "../../errors/AppError";

import User from "../../models/User";
import Package from "../../models/Package";

interface IRequest {
  admin_id: string;
  package_id: string;
  name: string;
}

class UpdateNamePackageService {
  public async execute({
    admin_id,
    package_id,
    name,
  }: IRequest): Promise<Package> {
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

    const packageExists = await packageRespository.findOne({
      where: { name },
    });

    if (packageExists) {
      throw new AppError(
        "Nome de embalagem já está cadastrada no sistema!",
        400
      );
    }

    findPackage.name = name;

    await packageRespository.save(findPackage);

    return findPackage;
  }
}

export default UpdateNamePackageService;
