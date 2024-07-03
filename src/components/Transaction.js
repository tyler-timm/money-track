'use client';

import Button from './Button';
import { deleteTransaction } from '@/app/lib/actions';

export default function Transaction({ transaction }) {

    let transactionType = transaction.type;
    transactionType = transactionType.charAt(0).toUpperCase() + transactionType.slice(1);

    let tranDate = new Date(transaction.createdAt);
    tranDate = `${tranDate.getMonth() + 1}/${tranDate.getDate()}/${tranDate.getFullYear()}`

    return (
        <tr>
            <td className='p-2 border'>{tranDate}</td>
            <td className='p-2 border'>{transaction.description}</td>
            <td className='p-2 border'>{transactionType}</td>
            <td className='p-2 border text-right'>${transaction.amount/100}</td>
            <td className='p-2 border text-center'>
                <Button
                    className='bg-red-500 hover:bg-red-600 drop-shadow-sm px-2 py-1 rounded'
                    onClick={() => deleteTransaction(transaction.id)}
                    text='X'
                />
            </td>
        </tr>
    )
}