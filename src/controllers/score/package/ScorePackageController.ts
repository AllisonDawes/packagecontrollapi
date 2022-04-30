import { Request, Response } from "express";

import InputScorePackagesService from "../../../services/score_packages/InputScorePackagesService";

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
}

export default ScorePackageController;
