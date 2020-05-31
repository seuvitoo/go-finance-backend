import { getRepository } from 'typeorm';

import Pots from '@modules/goals/infra/typeorm/entities/Goals';
import AppError from '@shared/errors/AppError';

interface Request {
  title: string;
  value: number;
}
class CreatePotsService {
  public async create({ title, value }: Request): Promise<Pots> {
    const potsRepository = getRepository(Pots);

    const potsTitle = await potsRepository.findOne({
      where: {
        title,
      },
    });

    if (potsTitle?.title) {
      throw new AppError('Já existe esse pote', 400);
    }

    const pots = potsRepository.create({
      title,
      value,
    });

    await potsRepository.save(pots);

    return pots;
  }
}

export default CreatePotsService;
