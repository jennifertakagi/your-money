import { ITransaction } from '../../types/constants';

export function TransactionCard({
  title,
  amount,
  type,
  category,
  createdAt,
}: Omit<ITransaction, 'id'>) {
  return (
    <tr>
      <td>{title}</td>
      <td className={type}>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(amount)}
      </td>
      <td>{category}</td>
      <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(createdAt))}</td>
    </tr>
  );
}
