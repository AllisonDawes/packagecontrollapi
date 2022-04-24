import { Request, Response } from "express";

import FindAllPackagesService from "../../services/package/FindAllPackagesService";
import CreateNamePackageService from "../../services/package/CreateNamePackageService";

class PackageController {
  public async index(request: Request, response: Response): Promise<Response> {
    const findAllPackages = new FindAllPackagesService();

    const namePackage = await findAllPackages.execute();

    return response.status(201).json(namePackage);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const admin_id = request.user.id;
    const { name } = request.body;

    const createNamePackage = new CreateNamePackageService();

    const namePackage = await createNamePackage.execute({
      admin_id,
      name,
    });

    return response.status(201).json(namePackage);
  }
}

export default PackageController;
