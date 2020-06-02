import { Router } from 'express';
import { container } from 'tsyringe';

import CreateGoalsService from '@modules/goals/services/CreateGoalsService';
import UpdateGoalsService from '@modules/goals/services/UpdateGoalsService';

const goalsRouter = Router();

// goalsRouter.get('/', async (request, response) => {
//   const goals = await goalsRepository.find();
//   return response.json({ goals });
// });

goalsRouter.post('/', async (request, response) => {
  const { title, value } = request.body;
  const createGoalsService = container.resolve(CreateGoalsService);

  const goals = await createGoalsService.create({
    title,
    value,
  });

  return response.json(goals);
});

goalsRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { title, value } = request.body;
  const updateGoals = new UpdateGoalsService();

  const goals = await updateGoals.execute({ id, title, value });

  return response.json(goals).status(204);
});

export default goalsRouter;
