import { Card } from './styles';

interface SummaryCardProps {
  image: string;
  title: string;
  value: string;
}

export function SummaryCard({ image, title, value }: SummaryCardProps) {
  return (
    <Card>
      <header>
        <p>{title}</p>
        <img src={image} alt={image} />
      </header>
      <strong>{value}</strong>
    </Card>
  );
}
