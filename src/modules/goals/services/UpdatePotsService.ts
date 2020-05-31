import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Pots from '@modules/goals/infra/typeorm/entities/Goals';

interface Request {
  id: string;
  title: string;
  value: number;
}

class UpdatePotsService {
  public async execute({ id, title, value }: Request): Promise<Pots> {
    const potsRepository = getRepository(Pots);

    const pots = await potsRepository.findOne(id);

    if (!pots) {
      throw new AppError('Esse pote não existe', 401);
    }

    pots.title = title;
    pots.value = value;

    potsRepository.save(pots);

    return pots;
  }
}

export default UpdatePotsService;
