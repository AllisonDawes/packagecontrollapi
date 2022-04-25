import { getRepository, ILike } from "typeorm";

import Package from "../../models/Package";

interface IRequest {
  name: string;
}

class FindByFilterPackageService {
  public async execute({ name }: IRequest): Promise<Package[]> {
    const packageRepository = getRepository(Package);

    const findPackages = await packageRepository.find({
      where: { name: ILike(`%${name}%`) },
      order: { name: "ASC" },
    });

    return findPackages;
  }
}

export default FindByFilterPackageService;
