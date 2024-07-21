'use client'

import Button from './Button';
import { createTransaction } from '@/app/lib/actions';

export default function Modal() {
    const today = new Date();
    const dateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    return (
        <aside className='w-96 text-lg leading-normal flex flex-col items-start justify-start gap-0 xl:fixed'>
            <form action={
                async formData => {
                    const newData = await createTransaction(formData);
                    console.log('newData', newData);
                }
            }>
                <h1 className='font-bold text-xl pb-3 text-yellow-500'>Add Transaction</h1>
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
                    Monthly:
                    <input
                        id='recurring-monthly'
                        name='recurring-monthly'
                        type='checkbox'
                        className='border m-2 w-5 h-5 text-black rounded'
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
                    className='bg-green-700 hover:bg-green-800 drop-shadow-md px-2 py-1 my-4 rounded'
                    text='Submit'
                    type='submit'
                >
                    Submit
                </Button>
            </form>
        </aside>
    )
}