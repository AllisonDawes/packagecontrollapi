import { getRepository } from "typeorm";

import AppError from "../../errors/AppError";

import User from "../../models/User";
import ScorePackage from "../../models/ScorePackage";

interface IRequest {
  user_id: string;
  score_id: string;
  score: number;
  conform: boolean;
}

class UpdateScorePackageService {
  public async execute({
    user_id,
    score_id,
    score,
    conform,
  }: IRequest): Promise<ScorePackage> {
    const userRepository = getRepository(User);
    const scorePackageRepository = getRepository(ScorePackage);

    const user = await userRepository.findOne({
      where: { id: user_id },
    });

    if (!user) {
      throw new AppError("Usuário não encontrado!", 400);
    }

    console.log({
      user,
    });

    if (!user.admin) {
      if (!user.admin_secundary) {
        throw new AppError("Usuário não tem permissão!", 400);
      }
    }

    const scorePackage = await scorePackageRepository.findOne(score_id);

    if (!scorePackage) {
      throw new AppError("Contagem de embalagem não encontrada!", 400);
    }

    scorePackage.score = score;
    scorePackage.conform = conform;

    await scorePackageRepository.save(scorePackage);

    return scorePackage;
  }
}

export default UpdateScorePackageService;
