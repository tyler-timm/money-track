'use client';

import { deleteTransaction } from '@/app/lib/actions';

export default function Transaction({ transaction }) {

    let transactionType = transaction.type;
    transactionType = transactionType.charAt(0).toUpperCase() + transactionType.slice(1);

    let tranDate = new Date(transaction.date);

    return (
        <tr>
            <td className='px-2 border'>{tranDate.getDate()}</td>
            <td className='px-2 border'>{transaction.description}</td>
            {transaction.amount > 0 ? (
                <td className='px-2 border text-right text-green-400'>${(transaction.amount / 100).toFixed(2)}</td>
            ) : (
                <td className='px-2 border text-right text-red-400'>${(transaction.amount / 100).toFixed(2)}</td>
            )}
            <td className='px-2 text-center'>
                <button
                    className='border hover:bg-red-900 drop-shadow-md px-2 rounded'
                    onClick={async () => await deleteTransaction(transaction.id)}
                >X</button>
            </td>
        </tr>
    )
}