import { Repository, getRepository } from 'typeorm';

import IGoalsRepository from '@modules/goals/repositories/IGoalsRepository';
import ICreateGoalsDTO from '@modules/goals/dtos/ICreateGoalsDTO';
import AppError from '@shared/errors/AppError';
import Goals from '../entities/Goals';

class GoalsRepository implements IGoalsRepository {
  private ormRepository: Repository<Goals>;

  constructor() {
    this.ormRepository = getRepository(Goals);
  }

  public async findByOne(id: string): Promise<Goals | undefined> {
    const findGoals = await this.ormRepository.findOne({
      where: { id },
    });

    return findGoals;
  }

  public async create({ title, value }: ICreateGoalsDTO): Promise<Goals> {
    try {
      const goals = this.ormRepository.create({ title, value });
      await this.ormRepository.save(goals);
      return goals;
    } catch (error) {
      throw new AppError('Já existe uma chave com esse nome', 400);
    }
  }
}

export default GoalsRepository;
