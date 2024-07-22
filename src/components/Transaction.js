'use client';

import { deleteTransaction } from '@/app/lib/actions';

export default function Transaction({ transaction }) {

    let transactionType = transaction.type;
    transactionType = transactionType.charAt(0).toUpperCase() + transactionType.slice(1);

    let tranDate = new Date(transaction.date);
    tranDate = `${tranDate.getMonth() + 1}/${tranDate.getDate()}/${tranDate.getFullYear()}`;

    let recurring = transaction.recurring ? 'Yes' : 'No';

    return (
        <tr>
            <td className='px-2 border'>{tranDate}</td>
            {transaction.recurring ? (
                <td className='px-2 border text-yellow-500 hidden sm:table-cell'>{recurring}</td>
            ) : (
                <td className='px-2 border hidden sm:table-cell'>{recurring}</td>
            )}
            <td className='px-2 border'>{transaction.description}</td>
            <td className='px-2 border hidden md:table-cell'>{transactionType}</td>
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