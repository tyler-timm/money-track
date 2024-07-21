import Transaction from "./Transaction";
import { getTransactions } from "@/app/lib/actions";

export default async function TransactionList() {
    let transactions = await getTransactions()
        .then(res => JSON.parse(res))
    let total = 0;
    let rucurrences = 4;

    transactions.forEach(tran => {
        total += tran.amount / 100;
        if (tran.recurring) {
            for (let i = 1; i < rucurrences; i++) {
                let newTran = { ...tran };
                const tranDate = new Date(tran.date);
                newTran.date = new Date(tranDate).setMonth(tranDate.getMonth() + i);
                transactions.push(newTran);
                total += tran.amount / 100;
            }
        }
    });
    transactions.sort((a, b) => new Date(a.date) - new Date(b.date));
    console.log('transactions', transactions);
    total = total.toFixed(2);

    return (
        <div className='flex flex-row justify-center flex-wrap gap-5 lg:gap-20'>
            <table className='text-lg'>
                <tbody>
                    <tr>
                        <td className='p-2 border font-bold'>Date</td>
                        <td className='p-2 border font-bold'>Monthly</td>
                        <td className='p-2 border font-bold'>Description</td>
                        <td className='p-2 border font-bold'>Type</td>
                        <td className='p-2 border font-bold'>Amount</td>
                        <td className='p-2 font-bold'></td>
                    </tr>

                    {transactions.map((transaction, id) => (
                        <Transaction key={id} transaction={transaction} />
                    ))}

                    <tr>
                        <td className='p-2 border text-right font-bold' colSpan='4'>Total</td>
                        <td className='p-2 border text-right'>${total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}