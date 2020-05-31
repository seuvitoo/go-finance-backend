import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreatePotsService from '@modules/goals/services/CreatePotsService';
import UpdatePotsService from '@modules/goals/services/UpdatePotsService';
import Pots from '@modules/goals/infra/typeorm/entities/Goals';

const goalsRouter = Router();

goalsRouter.get('/', async (request, response) => {
  const potsRepository = await getRepository(Pots);
  const pots = await potsRepository.find();

  return response.json({ pots });
});

goalsRouter.post('/', async (request, response) => {
  const { title, value } = request.body;
  const createPotsService = new CreatePotsService();

  const transaction = await createPotsService.create({
    title,
    value,
  });

  return response.json(transaction);
});

goalsRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { title, value } = request.body;
  const updatePots = new UpdatePotsService();

  const pots = await updatePots.execute({ id, title, value });

  return response.json(pots).status(204);
});

export default goalsRouter;
