import AppError from '@shared/errors/AppError';
import Goals from '@modules/goals/infra/typeorm/entities/Goals';
import IGoaslRepository from '../repositories/IGoalsRepository';

interface IRequest {
  title: string;
  value: number;
}
class CreateGoalsService {
  constructor(private goalsRepository: IGoaslRepository) {}

  public async create({ title, value }: IRequest): Promise<Goals> {
   // const potsTitle = await this.goalsRepository.findByOne(title);

    // if (potsTitle?.title) {
    //   throw new AppError('Já existe esse pote', 400);
    // }
    const goals = await this.goalsRepository.create({
      title,
      value,
    });

    return goals;
  }
}

export default CreateGoalsService;
