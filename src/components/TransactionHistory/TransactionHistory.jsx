import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableBody,
  TableItem,
  TableUnit,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table className="transaction-history">
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableItem key={id}>
            <TableUnit>{type}</TableUnit>
            <TableUnit>{amount}</TableUnit>
            <TableUnit>{currency}</TableUnit>
          </TableItem>
        ))}
      </TableBody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
