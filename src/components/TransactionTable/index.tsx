import { Container } from './styles';

export function TransactionTable() {
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
          <tr>
            <td>Website freelancer</td>
            <td className="deposit">$ 12000</td>
            <td>Development</td>
            <td>03/05/2021</td>
          </tr>
          <tr>
            <td>Lunch</td>
            <td className="withdrawal">- $ 12</td>
            <td>Food</td>
            <td>01/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}