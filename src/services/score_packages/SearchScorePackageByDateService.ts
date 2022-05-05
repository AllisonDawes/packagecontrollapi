import { getRepository } from "typeorm";

import AppError from "../../errors/AppError";

import User from "../../models/User";
import ScorePackage from "../../models/ScorePackage";

interface IRequest {
  user_id: string;
  score_date: Date;
}

class SearchScorePackageByDate {
  public async execute({
    user_id,
    score_date,
  }: IRequest): Promise<ScorePackage> {
    const userRespository = getRepository(User);
    const scorePackageRepository = getRepository(ScorePackage);
  }
}

export default SearchScorePackageByDate;
