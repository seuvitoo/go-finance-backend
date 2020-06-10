import { Router } from 'express';

import GoalsController from '../../controllers/GoalsController';

const goalsRouter = Router();

const goalsController = new GoalsController();

// goalsRouter.get('/', async (request, response) => {
//   const goalsRepository = new GoalsRepository();
//   const goals = await goalsRepository.find();
//   return response.json({ goals });
// });

goalsRouter.post('/', goalsController.create);

// goalsRouter.put('/:id', async (request, response) => {
//   const { id } = request.params;
//   const { title, value } = request.body;
//   const updateGoals = new UpdateGoalsService();

//   const goals = await updateGoals.execute({ id, title, value });

//   return response.json(goals).status(204);
// });

export default goalsRouter;
