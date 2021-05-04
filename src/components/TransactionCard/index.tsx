import { ITransaction } from '../../types/constants';

export function TransactionCard({
  title,
  amount,
  type,
  category,
  created,
}: Omit<ITransaction, 'id'>) {
  return (
    <tr>
      <td>{title}</td>
      <td className={type}>{amount}</td>
      <td>{category}</td>
      <td>{created}</td>
    </tr>
  );
}
