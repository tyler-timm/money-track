'use client'

import Button from '../components/Button';
import { createTransaction } from '@/app/lib/actions';

export default function Modal() {
    const today = new Date();
    const dateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    return (
        <form action={
            async formData => {
                const newData = await createTransaction(formData);
                console.log('newData', newData);
            }
        }>
            <div className='w-96 text-lg leading-normal flex flex-col items-end justify-start gap-0'>
                <h1 className='font-bold text-xl pb-3'>Add Transaction</h1>
                <label>
                    Date:
                    <input
                        id='date'
                        name='date'
                        type='date'
                        className='border m-2 p-1 text-black rounded'
                        defaultValue={dateString}
                    />
                </label>
                <label>
                    Type:
                    <select
                        id='type'
                        name='type'
                        className='border m-2 p-2 text-black rounded'
                    >
                        <option value='deposit'>Deposit</option>
                        <option value='withdrawal'>Withdrawal</option>
                    </select>
                </label>
                <label>
                    Description:
                    <input
                        id='description'
                        name='description'
                        type='text'
                        className='border m-2 p-1 text-black rounded'
                        placeholder='What did you buy?'
                    />
                </label>
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
                <Button
                    className='bg-green-600 hover:bg-green-700 drop-shadow-sm px-2 py-1 my-4 rounded'
                    text='Submit'
                    type='submit'
                >
                    Submit
                </Button>
                {/* <Button
                    className='bg-blue-600 hover:bg-blue-700 drop-shadow-sm px-2 py-1 rounded'
                    text='Cancel'
                /> */}
            </div>
        </form>
    )
}