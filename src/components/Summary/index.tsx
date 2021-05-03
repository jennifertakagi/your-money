import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import TotalImg from '../../assets/total.svg';

import { Container } from './styles';

import { SummaryCard } from '../SummaryCard';

const summaryCardHash = [
  {
    title: 'Incomes',
    image: IncomeImg,
    value: '$ 1.000',
  },
  {
    title: 'Outcomes',
    image: OutcomeImg,
    value: '- $ 500',
  },
  {
    title: 'Total',
    image: TotalImg,
    value: '$ 5000',
  },
];

export function Summary () {
  return (
    <Container>
      {summaryCardHash.map(summaryCard => (
        <SummaryCard 
          title={summaryCard.title}
          image={summaryCard.image}
          value={summaryCard.value}
        />
      ))}
    </Container>
  )
}