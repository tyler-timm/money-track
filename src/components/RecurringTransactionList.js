import { getTransactions } from "@/app/lib/actions";
import MinimalTransaction from "./MinimalTransaction";

export default async function TransactionList() {
    let transactions = await getTransactions()
        .then(res => JSON.parse(res))
    let total = 0;

    let recurringTransactions = transactions.filter(tran => tran.recurring);
    recurringTransactions.forEach(tran => total += tran.amount / 100);
    recurringTransactions.sort((a, b) => new Date(a.date) - new Date(b.date));

    console.log('transactions', transactions);
    total = total.toFixed(2);
    /** @todo add show/hide button */ 

    return (
        <aside className='flex flex-col justify-end sm:justify-center flex-wrap gap-5 sm:gap-2 xl:fixed right-2'>
            <h2 className='font-bold text-xl pb-3 text-yellow-500'>Recurring Transactions</h2>
            <table className='text-lg'>
                <tbody>
                    <tr>
                        <th className='p-2 border font-bold'>Date</th>
                        <th className='p-2 border font-bold'>Description</th>
                        <th className='p-2 border font-bold'>Amount</th>
                    </tr>

                    {recurringTransactions.map((transaction, id) => (
                        <MinimalTransaction key={id} transaction={transaction} />
                    ))}

                    <tr>
                        <td className='p-2 border text-right font-bold' colSpan='2'>Total</td>
                        <td className='p-2 border text-right'>${total}</td>
                    </tr>
                </tbody>
            </table>
        </aside>
    );
}