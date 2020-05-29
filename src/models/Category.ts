import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToMany,
} from 'typeorm';

import Transaction from './Transactions';

@Entity('categories')
class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // adicionado essa linha para desafio react
  @OneToMany(() => Transaction, transaction => transaction.category)
  transaction: Transaction;
}

export default Category;
