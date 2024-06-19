import Transaction from "./Transaction";

export default function TransactionList({ transactions, onDelete }) {
    let total = 0;
    transactions.forEach(tran => total += tran.amount / 100);
    total = total.toFixed(2);

    return (
        <table className='text-lg'>
            <tbody>
                <tr>
                    <td className='p-2 border font-bold'>Date</td>
                    <td className='p-2 border font-bold'>Description</td>
                    <td className='p-2 border font-bold'>Type</td>
                    <td className='p-2 border font-bold'>Amount</td>
                    <td className='p-2 border font-bold'>Delete</td>
                </tr>

                {transactions.map((transaction, id) => (
                    <Transaction key={id} transaction={transaction} onDelete={onDelete} />
                ))}

                <tr>
                    <td className='p-2 border text-right font-bold' colSpan='3'>Total</td>
                    <td className='p-2 border text-right'>${total}</td>
                </tr>
            </tbody>
        </table>
    );
}