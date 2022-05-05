import { Request, Response } from "express";

import InputScorePackagesService from "../../../services/score_packages/InputScorePackagesService";
import UpdateScorePackageService from "../../../services/score_packages/UpdateScorePackageService";

class ScorePackageController {
  //public async index(request: Request, response: Response): Promise<Response> {}

  //public async show(request: Request, response: Response): Promise<Response> {}

  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { package_id, score, conform } = request.body;

    const inputScorePackages = new InputScorePackagesService();

    const inputStock = await inputScorePackages.execute({
      user_id,
      package_id,
      score,
      conform,
    });

    return response.status(201).json(inputStock);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { score_id } = request.params;
    const { score, conform } = request.body;

    const updateScorePackage = new UpdateScorePackageService();

    const inputStock = await updateScorePackage.execute({
      user_id,
      score_id,
      score,
      conform,
    });

    return response.status(201).json(inputStock);
  }
}

export default ScorePackageController;
