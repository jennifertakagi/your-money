import { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from '../services/api';
import { ITransaction } from '../types/constants';

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<ITransaction[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api.get('/transactions').then(response => {
      const { data: { transactions: transactionsDB = [] } = {} } = response;
      setTransactions(transactionsDB);
    });
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}
