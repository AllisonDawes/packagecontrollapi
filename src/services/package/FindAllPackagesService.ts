import { getRepository } from "typeorm";

import Package from "../../models/Package";

class FindAllPackagesService {
  public async execute(): Promise<Package[]> {
    const packageRespository = getRepository(Package);

    const findAllPackage = await packageRespository.find();

    return findAllPackage;
  }
}

export default FindAllPackagesService;
