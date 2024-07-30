import Transaction from "./Transaction";
import { getTransactions } from "@/app/lib/actions";

export default async function TransactionList() {
    let transactions = await getTransactions()
        .then(res => JSON.parse(res))
    let total = 0;
    let rucurrences = 3;

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
        <div className='flex flex-row justify-start sm:justify-center flex-wrap gap-5 sm:gap-20 mt-32'>
            <table className='text-lg'>
                <thead>
                    <tr>
                        <th className='p-2 font-bold sticky top-28 z-10'
                            style={{ backgroundColor: "#264653" }}>Date</th>
                        <th className='p-2 font-bold hidden sm:table-cell sticky top-28 z-10'
                            style={{ backgroundColor: "#264653" }}>Monthly</th>
                        <th className='p-2 font-bold sticky top-28 z-10'
                            style={{ backgroundColor: "#264653" }}>Description</th>
                        <th className='p-2 font-bold hidden sm:table-cell sticky top-28 z-10'
                            style={{ backgroundColor: "#264653" }}>Type</th>
                        <th className='p-2 font-bold sticky top-28 z-10'
                            style={{ backgroundColor: "#264653" }}>Amount</th>
                        <th className='p-2 font-bold sticky top-28 z-10'
                            style={{ backgroundColor: "#264653" }}></th>
                    </tr>
                </thead>
                <tbody>

                    {transactions.map((transaction, id) => (
                        <Transaction key={id} transaction={transaction} />
                    ))}

                </tbody>
                <tfoot>
                    <tr>
                        <td className='p-2 text-right font-bold' colSpan='4'>Total:</td>
                        <td className='p-2 text-right font-bold'>${total}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}