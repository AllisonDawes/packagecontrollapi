import { getRepository } from "typeorm";

import AppError from "../../errors/AppError";

import User from "../../models/User";
import Package from "../../models/Package";

interface IRequest {
  admin_id: string;
  name: string;
}

class CreateNamePackageService {
  public async execute({ admin_id, name }: IRequest): Promise<Package> {
    const userRespository = getRepository(User);
    const packageRespository = getRepository(Package);

    const admin = await userRespository.findOne({
      where: { id: admin_id, admin: true },
    });

    if (!admin) {
      throw new AppError("Usuário não encontrado, ou não tem permissão", 400);
    }

    const findPackage = await packageRespository.findOne({
      where: { name },
    });

    if (findPackage) {
      throw new AppError("Nome de embalagem já está em uso!", 400);
    }

    const namePackage = packageRespository.create({
      name,
    });

    await packageRespository.save(namePackage);

    return namePackage;
  }
}

export default CreateNamePackageService;
