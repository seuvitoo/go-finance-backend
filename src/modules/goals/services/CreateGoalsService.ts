// import AppError from '@shared/errors/AppError';
import Goals from '@modules/goals/infra/typeorm/entities/Goals';
import { inject, injectable } from 'tsyringe';
import IGoaslRepository from '../repositories/IGoalsRepository';

interface IRequest {
  title: string;
  value: number;
}

@injectable()
class CreateGoalsService {
  constructor(
    @inject('GoalsRepository')
    private goalsRepository: IGoaslRepository,
  ) {}

  public async create({ title, value }: IRequest): Promise<Goals> {
    const goals = await this.goalsRepository.create({
      title,
      value,
    });

    return goals;
  }
}

export default CreateGoalsService;
