import { Router } from 'express';

import CreateTransactionService from '../services/CreateTransactions';

const transactionsRouter = Router();

transactionsRouter.get('/', async (request, response) => {
  const transactions = await transactionsRepository.find();
  const balance = await transactionsRepository.getBalance();

  return response.json({ transactions, balance });
});

transactionsRouter.post('/', async (request, response) => {
  const { type, category, description, value } = request.body;
  const createTransaction = new CreateTransactionService();

  const transaction = await createTransaction.create({
    type,
    category,
    description,
    value,
  });

  return response.json(transaction);
});

transactionsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const deleteTransaction = new DeleteTransactionService();
  await deleteTransaction.execute(id);

  return response.status(204).send();
});

export default transactionsRouter;
