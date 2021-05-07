import { useTransactions } from '../../hooks/useTransactions';

import { TransactionCard } from '../TransactionCard';

import { Container } from './styles';

export function TransactionTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
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
