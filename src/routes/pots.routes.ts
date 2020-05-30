import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreatePotsService from '../services/CreatePotsService';
import UpdatePotsService from '../services/UpdatePotsService';
import Pots from '../models/Pots';

const potsRouter = Router();

potsRouter.get('/', async (request, response) => {
  const potsRepository = await getRepository(Pots);
  const pots = await potsRepository.find();

  return response.json({ pots });
});

potsRouter.post('/', async (request, response) => {
  const { title, value } = request.body;
  const createPotsService = new CreatePotsService();

  const transaction = await createPotsService.create({
    title,
    value,
  });

  return response.json(transaction);
});

potsRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { title, value } = request.body;
  const updatePots = new UpdatePotsService();

  const pots = await updatePots.execute({ id, title, value });

  return response.json(pots).status(204);
});

export default potsRouter;
