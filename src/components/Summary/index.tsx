import { useTransactions } from '../../hooks/useTransactions';

import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import TotalImg from '../../assets/total.svg';

import { Container } from './styles';

import { SummaryCard } from '../SummaryCard';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdrawal += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    { deposits: 0, withdrawal: 0, total: 0 },
  );

  const summaryCardHash = [
    {
      title: 'Incomes',
      image: IncomeImg,
      amount: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(summary.deposits),
    },
    {
      title: 'Outcomes',
      image: OutcomeImg,
      amount: `-${new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(summary.withdrawal)}`,
    },
    {
      title: 'Total',
      image: TotalImg,
      amount: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(summary.total),
    },
  ];

  return (
    <Container>
      {summaryCardHash.map(summaryCard => (
        <SummaryCard
          key={summaryCard.title}
          title={summaryCard.title}
          image={summaryCard.image}
          amount={summaryCard.amount}
        />
      ))}
    </Container>
  );
}
