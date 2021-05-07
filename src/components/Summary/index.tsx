import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import TotalImg from '../../assets/total.svg';

import { Container } from './styles';

import { SummaryCard } from '../SummaryCard';

const summaryCardHash = [
  {
    title: 'Incomes',
    image: IncomeImg,
    amount: '$ 1.000',
  },
  {
    title: 'Outcomes',
    image: OutcomeImg,
    amount: '- $ 500',
  },
  {
    title: 'Total',
    image: TotalImg,
    amount: '$ 5000',
  },
];

export function Summary() {
  return (
    <Container>
      {summaryCardHash.map(summaryCard => (
        <SummaryCard
          title={summaryCard.title}
          image={summaryCard.image}
          amount={summaryCard.amount}
        />
      ))}
    </Container>
  );
}
