import { Request, Response } from "express";

import FindAllPackagesService from "../../services/package/FindAllPackagesService";
import CreateNamePackageService from "../../services/package/CreateNamePackageService";
import FindByFilterPackageService from "../../services/package/FindByFilterPackageService";
import UpdateNamePackageService from "../../services/package/UpdateNamePackageService";
import DeletePackageService from "../../services/package/DeletePackageService";

class PackageController {
  public async index(request: Request, response: Response): Promise<Response> {
    const findAllPackages = new FindAllPackagesService();

    const namePackage = await findAllPackages.execute();

    return response.status(200).json(namePackage);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;

    const findByFilterPackage = new FindByFilterPackageService();

    const byFilterPackage = await findByFilterPackage.execute({
      name: String(name),
    });

    return response.status(200).json(byFilterPackage);
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

  public async update(request: Request, response: Response): Promise<Response> {
    const admin_id = request.user.id;
    const { package_id } = request.params;
    const { name } = request.body;

    const updateNamePackage = new UpdateNamePackageService();

    const namePackage = await updateNamePackage.execute({
      admin_id,
      package_id,
      name,
    });

    return response.status(200).json(namePackage);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const admin_id = request.user.id;
    const { package_id } = request.params;

    const deletePackage = new DeletePackageService();

    await deletePackage.execute({
      admin_id,
      package_id,
    });

    return response.status(200).json();
  }
}

export default PackageController;
