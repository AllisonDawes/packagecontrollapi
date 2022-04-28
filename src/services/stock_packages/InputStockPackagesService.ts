import { getRepository } from "typeorm";
import { startOfDay } from "date-fns";

import AppError from "../../errors/AppError";

import User from "../../models/User";
import Package from "../../models/Package";
import StockPackage from "../../models/StockPackage";

interface IRequest {
  user_id: string;
  package_id: string;
  input: number;
}

class InputStockPackagesService {
  public async execute({
    user_id,
    package_id,
    input,
  }: IRequest): Promise<StockPackage> {
    const userRepository = getRepository(User);
    const packageRepository = getRepository(Package);
    const stockPackageRepository = getRepository(StockPackage);

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
      throw new AppError("Usuário não encontrado, ou não permitido!", 400);
    }

    const dateRegister = startOfDay(new Date());

    const stockPackage = stockPackageRepository.create({
      user_id,
      package_id,
      input,
      date: dateRegister,
    });

    await stockPackageRepository.save(stockPackage);

    return stockPackage;
  }
}

export default InputStockPackagesService;
