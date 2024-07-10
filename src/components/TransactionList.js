import Transaction from "./Transaction";
import { getTransactions } from "@/app/lib/actions";

export default async function TransactionList() {
    const transactions = await getTransactions()
        .then(res => JSON.parse(res))
    let total = 0;
    transactions.forEach(tran => total += tran.amount / 100);
    transactions.sort((a, b) => new Date(a.date) - new Date(b.date));
    console.log('transactions', transactions);
    total = total.toFixed(2);

    return (
        <div>
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
                        <Transaction key={id} transaction={transaction} />
                    ))}

                    <tr>
                        <td className='p-2 border text-right font-bold' colSpan='3'>Total</td>
                        <td className='p-2 border text-right'>${total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}