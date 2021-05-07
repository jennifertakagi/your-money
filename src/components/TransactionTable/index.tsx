import { useEffect, useState } from 'react';
import { TransactionCard } from '../TransactionCard';

import { Container } from './styles';

import { api } from '../../services/api';

import { ITransaction } from '../../types/constants';

export function TransactionTable() {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api('/transactions').then(response => {
      const { data: { transactions: transactionsDB = [] } = {} } = response;
      setTransactions(transactionsDB);
    });
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transition => (
            <TransactionCard
              key={transition.id}
              title={transition.title}
              amount={transition.amount}
              type={transition.type}
              category={transition.category}
              createdAt={transition.createdAt}
            />
          ))}
        </tbody>
      </table>
    </Container>
  );
}
