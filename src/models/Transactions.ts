import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Category from './Category';

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // adicionado essa linha para desafio react
  @ManyToOne(() => Category, category => category.transaction, { eager: true })
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column()
  category_id: string;

  @Column()
  type: 'income' | 'outcome' | 'investment';

  @Column()
  description: string;

  @Column('decimal')
  value: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Transaction;
