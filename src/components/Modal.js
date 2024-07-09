'use client'

import Button from '../components/Button';
import { createTransaction } from '@/app/lib/actions';

export default function Modal() {
    return (
        <form action={
            async formData => {
                const newData = await createTransaction(formData);
                console.log('newData', newData);
                // setTransactions(newData);
            }
        }>
            <div className='mb-5 p-3 w-96 text-lg'>
                <span className='font-bold text-lg'>Add Transaction</span>
                <br />
                <label>
                    Description:
                    <input
                        id='description'
                        name='description'
                        type='text'
                        className='border m-2 p-1 text-black rounded'
                    />
                </label>
                <br />
                <label>
                    Type:
                    <select
                        id='type'
                        name='type'
                        className='border m-2 p-1 text-black rounded'
                    >
                        <option value='deposit'>Deposit</option>
                        <option value='withdrawal'>Withdrawal</option>
                    </select>
                </label>
                <br />
                <label>
                    Amount:
                    <input
                        id='amount'
                        name='amount'
                        type='text'
                        placeholder='$0.00'
                        className='border m-2 p-1 text-black rounded'
                    />
                </label>
                <br />
                <Button
                    className='bg-green-600 hover:bg-green-700 drop-shadow-sm px-2 py-1 mr-4 rounded'
                    text='Submit'
                    type='submit'
                >
                    Submit
                </Button>
                <Button
                    className='bg-blue-600 hover:bg-blue-700 drop-shadow-sm px-2 py-1 rounded'
                    text='Cancel'
                />
            </div>
        </form>
    )
}