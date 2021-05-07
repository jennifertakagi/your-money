import { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from '../services/api';
import { ITransaction, INewTransaction } from '../types/constants';

interface ITransactionsContext {
  createTransaction: (transaction: INewTransaction) => Promise<void>;
  transactions: ITransaction[];
}
interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<ITransactionsContext>(
  {} as ITransactionsContext,
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api.get('/transactions').then(response => {
      const { data: { transactions: transactionsDB = [] } = {} } = response;
      setTransactions(transactionsDB);
    });
  }, []);

  async function createTransaction(newTransaction: INewTransaction) {
    const response = await api.post('/transactions', newTransaction);
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }
  return (
    <TransactionsContext.Provider value={{ createTransaction, transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
