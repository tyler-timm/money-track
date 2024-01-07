export default function Transaction ({ transaction, onDelete }) {
    return (
        <tr>
            <td className='p-2 border text-right'>{transaction.amount}</td>
            <td className='p-2 border'>{transaction.text}</td>
            <td className='p-2 border'>{transaction.category}</td>
            <td className='p-2 border text-center' onClick={() => onDelete(transaction.id)}>X</td>
        </tr>
    );
}