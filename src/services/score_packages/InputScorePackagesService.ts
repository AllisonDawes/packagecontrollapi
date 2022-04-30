import { getRepository } from "typeorm";
import { startOfDay } from "date-fns";

import AppError from "../../errors/AppError";

import User from "../../models/User";
import Package from "../../models/Package";
import ScorePackage from "../../models/ScorePackage";

interface IRequest {
  user_id: string;
  package_id: string;
  score: number;
  conform: boolean;
}

class InputScorePackagesService {
  public async execute({
    user_id,
    package_id,
    score,
    conform,
  }: IRequest): Promise<ScorePackage> {
    const userRepository = getRepository(User);
    const packageRepository = getRepository(Package);
    const scorePackageRepository = getRepository(ScorePackage);

    const packageExist = await packageRepository.findOne({
      where: { id: package_id },
    });

    if (!packageExist) {
      throw new AppError("Embalagem não encontrada!", 400);
    }

    const userExist = await userRepository.findOne({
      where: { id: user_id },
    });

    if (!userExist) {
      throw new AppError("Usuário não encontrado!", 400);
    }

    if (!userExist.admin || userExist.admin_secundary) {
      throw new AppError("Usuário não tem permissão!", 400);
    }

    const dateRegister = startOfDay(new Date());

    const stockPackage = scorePackageRepository.create({
      user_id,
      package_id,
      score,
      date: dateRegister,
      conform,
    });

    await scorePackageRepository.save(stockPackage);

    return stockPackage;
  }
}

export default InputScorePackagesService;
