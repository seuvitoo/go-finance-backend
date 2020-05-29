import { getCustomRepository, getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Transaction from '../models/Transactions';
import Category from '../models/Category';

import TransactionRepository from '../repositories/TransactionsRepository';

interface Request {
  type: 'income' | 'outcome' | 'investment';
  category: string;
  description: string;
  value: number;
}
class CreateTransactionService {
  public async create({
    type,
    category,
    description,
    value,
  }: Request): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionRepository);
    const categoryRepository = getRepository(Category);

    // const { total } = await transactionsRepository.getBalance();
    // if (type === 'outcome' && total < value) {
    //   throw new AppError('You do not have enough balance');
    // }

    let transactionCategory = await categoryRepository.findOne({
      where: {
        description: category,
      },
    });

    if (!transactionCategory) {
      // não existe? crio ela
      transactionCategory = categoryRepository.create({
        description: category,
      });
      await categoryRepository.save(transactionCategory);
    }

    // existe? buscar ela do banco de dados e usar o id que foi retornad

    const transaction = transactionsRepository.create({
      description,
      value,
      type,
      category: transactionCategory,
    });

    await transactionsRepository.save(transaction);
    return transaction;
  }
}

export default CreateTransactionService;
