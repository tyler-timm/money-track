import Button from './Button';

export default function Transaction({ transaction, onDelete }) {
    return (
        <tr>
            <td className='p-2 border text-right'>{transaction.amount}</td>
            <td className='p-2 border'>{transaction.description}</td>
            <td className='p-2 border'>{transaction.type}</td>
            <td className='p-2 border text-center'>
                <Button
                    className='bg-red-500 hover:bg-red-600 drop-shadow-sm px-2 py-1 rounded'
                    onClick={() => onDelete(transaction.id)}
                    text='Delete'
                />
            </td>
        </tr>
    )
}