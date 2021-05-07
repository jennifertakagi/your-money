export interface ITransaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export type INewTransaction = Omit<ITransaction, 'id' | 'createdAt'>;
