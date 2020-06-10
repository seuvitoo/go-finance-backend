import { Response, Request } from 'express';
import { container } from 'tsyringe';

import CreateGoalsService from '@modules/goals/services/CreateGoalsService';

export default class GoalsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, value } = request.body;
    const createGoalsService = container.resolve(CreateGoalsService);

    const goals = await createGoalsService.create({
      title,
      value,
    });

    return response.json(goals);
  }
}
