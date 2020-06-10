import { container } from 'tsyringe';
import IGoalsRepository from '@modules/goals/repositories/IGoalsRepository';

import GoalsRepository from '@modules/goals/infra/typeorm/repositories/GoalsRepository';

container.registerSingleton<IGoalsRepository>(
  'GoalsRepository',
  GoalsRepository,
);
