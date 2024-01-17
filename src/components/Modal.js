import { useState } from "react";
import Button from '../components/Button';

export default function Modal({ isModalVisible, hideOnCancel }) {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('');
    const [category, setCategory] = useState('');

    const submitData = () => {
        console.log({
            amount: amount,
            type: type,
            category: category
        });
    }

    if (!isModalVisible) return null;
    return (
        <div className='border mb-5 p-3'>
            Add Transaction
            <br />
            <label>
                Amount:
                <input
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    type='text'
                    className='border m-2 text-black'
                />
            </label>
            <br />
            <label>
                Type:
                <input
                    value={type}
                    onChange={e => setType(e.target.value)}
                    type='text'
                    className='border m-2 text-black'
                />
            </label>
            <br />
            <label>
                Category:
                <input
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    type='text'
                    className='border m-2 text-black'
                />
            </label>
            <br />
            <Button
                className='bg-green-600 hover:bg-green-700 drop-shadow-sm px-2 py-1 mr-4 rounded'
                onClick={submitData}
                text='Submit'
            />
            <Button
                className='bg-blue-600 hover:bg-blue-700 drop-shadow-sm px-2 py-1 rounded'
                onClick={hideOnCancel}
                text='Cancel'
            />
        </div>
    )
}