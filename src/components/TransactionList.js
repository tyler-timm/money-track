import Transaction from "./Transaction";

export default function TransactionList ({ transactions, onDelete }) {
    let total = 0;
    transactions.forEach(tran => total += tran.amount);

    return (
        <table>
            <tr>
                <td className='p-2 border'>Amount</td>
                <td className='p-2 border'>Type</td>
                <td className='p-2 border'>Description</td>
                <td className='p-2 border'>Delete</td>
            </tr>
            {transactions.map((transaction, id) => (
                <Transaction key={id} transaction={transaction} onDelete={onDelete} />
            ))}
            <tr>
                <td className='p-2 border text-right'>{total}</td>
                <td className='p-2 border' colspan='3'>Total</td>
            </tr>
        </table>
    );
}