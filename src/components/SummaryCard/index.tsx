import { Card } from './styles';

interface SummaryCardProps {
  image: string;
  title: string;
  amount: string;
}

export function SummaryCard({ image, title, amount }: SummaryCardProps) {
  return (
    <Card>
      <header>
        <p>{title}</p>
        <img src={image} alt={image} />
      </header>
      <strong>{amount}</strong>
    </Card>
  );
}
