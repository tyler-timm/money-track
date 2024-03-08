import Transaction from "./Transaction";

export default function TransactionList({ transactions, onDelete }) {
    let total = 0;
    transactions.forEach(tran => total += tran.amount);
    total = total.toFixed(2);

    return (
        <table>
            <tbody>
                <tr>
                    <td className='p-2 border text-bold'>Amount</td>
                    <td className='p-2 border text-bold'>Description</td>
                    <td className='p-2 border text-bold'>Type</td>
                    <td className='p-2 border text-bold'>Delete</td>
                </tr>

                {transactions.map((transaction, id) => (
                    <Transaction key={id} transaction={transaction} onDelete={onDelete} />
                ))}

                <tr>
                    <td className='p-2 border text-right'>${total}</td>
                    <td className='p-2 border' colSpan='3'>Total</td>
                </tr>
            </tbody>
        </table>
    );
}