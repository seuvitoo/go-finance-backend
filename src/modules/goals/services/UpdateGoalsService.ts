import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Goals from '@modules/goals/infra/typeorm/entities/Goals';

interface IRequest {
  id: string;
  title: string;
  value: number;
}

class UpdateGoalsService {
  public async execute({ id, title, value }: IRequest): Promise<Goals> {
    const goalsRepository = getRepository(Goals);

    const goals = await goalsRepository.findOne(id);

    if (!goals) {
      throw new AppError('Esse pote não existe', 401);
    }

    goals.title = title;
    goals.value = value;

    goalsRepository.save(goals);

    return goals;
  }
}

export default UpdateGoalsService;
