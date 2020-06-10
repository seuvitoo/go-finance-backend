import Goals from '../infra/typeorm/entities/Goals';
import ICreateGoalsDTO from '../dtos/ICreateGoalsDTO';

export default interface IGoaslRepository {
  create({ title, value }: ICreateGoalsDTO): Promise<Goals>;
  findByOne(data: string): Promise<Goals | undefined>;
}
