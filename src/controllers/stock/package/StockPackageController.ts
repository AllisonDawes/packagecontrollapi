import { Request, Response } from "express";

import InputStockPackagesService from "../../../services/stock_packages/InputStockPackagesService";

class StockPackageController {
  //public async index(request: Request, response: Response): Promise<Response> {}

  //public async show(request: Request, response: Response): Promise<Response> {}

  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { package_id, input } = request.body;

    const inputStockPackages = new InputStockPackagesService();

    const inputStock = await inputStockPackages.execute({
      user_id,
      package_id,
      input,
    });

    return response.status(201).json(inputStock);
  }
}

export default StockPackageController;
