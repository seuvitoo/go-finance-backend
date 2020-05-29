import { Router } from 'express';

import CreatePotsService from '../services/CreatePotsService';

const potsRouter = Router();

// pots.get('/', async (request, response) => {
//   const transactions = await transactionsRepository.find();
//   const balance = await transactionsRepository.getBalance();

//   return response.json({ transactions, balance });
// });

potsRouter.post('/', async (request, response) => {
  const { title, value } = request.body;
  const createPotsService = new CreatePotsService();

  const transaction = await createPotsService.create({
    title,
    value,
  });

  return response.json(transaction);
});

// pots.delete('/:id', async (request, response) => {
//   const { id } = request.params;
//   const deleteTransaction = new DeleteTransactionService();
//   await deleteTransaction.execute(id);

//   return response.status(204).send();
// });

export default potsRouter;
