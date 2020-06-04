import { Response, Request } from 'express';

import CreateGoalsService from '@modules/goals/services/CreateGoalsService';
import GoalsRepository from '@modules/goals/infra/typeorm/repositories/GoalsRepository';
import Goals from '../typeorm/entities/Goals';

export default class GoalsController {
  public async create(response: Response, request: Request): Promise<Response> {
    const { title, value } = request.body;

    const goalsRepository = new GoalsRepository();
    const createGoalsService = new CreateGoalsService(goalsRepository);

    const goals = await createGoalsService.create({
      title,
      value,
    });

    return response.json(goals);
  }
}
