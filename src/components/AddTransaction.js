'use client'

import { createTransaction } from '@/app/lib/actions';
import { useState } from 'react';


export default function Modal() {
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const today = new Date();
    const dateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    return (
        <div>
            <button
                className='bg-blue-700 hover:bg-blue-800 drop-shadow-md px-2 py-1 my-2 rounded'
                type='button'
                onClick={() => setModalIsVisible(!modalIsVisible)}
            >
                Show/Hide
            </button>
            {modalIsVisible &&
                <aside className='w-96 text-lg leading-normal xl:fixed'>
                    <form action={
                        async formData => {
                            const newData = await createTransaction(formData);
                            console.log('newData', newData);
                        }
                    }
                        className='flex flex-col items-start justify-start gap-0'
                    >
                        <h2 className='font-bold text-xl pb-3 text-yellow-500'>Add Transaction</h2>
                        <label htmlFor='date'>
                            Date:
                            <input
                                id='date'
                                name='date'
                                type='date'
                                className='border m-2 p-1 text-black rounded'
                                defaultValue={dateString}
                            />
                        </label>
                        <label htmlFor='type'>
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
                        <label htmlFor='description'>
                            Description:
                            <input
                                id='description'
                                name='description'
                                type='text'
                                className='border m-2 p-1 text-black rounded'
                                placeholder='Description'
                            />
                        </label>
                        <label htmlFor='recurring-monthly'>
                            Monthly:
                            <input
                                id='recurring-monthly'
                                name='recurring-monthly'
                                type='checkbox'
                                className='border m-2 w-5 h-5 text-black rounded'
                            />
                        </label>
                        <label htmlFor='amount'>
                            Amount:
                            <input
                                id='amount'
                                name='amount'
                                type='text'
                                placeholder='$0.00'
                                className='border m-2 p-1 text-black rounded'
                            />
                        </label>
                        <button
                            className='bg-green-700 hover:bg-green-800 drop-shadow-md px-2 py-1 my-4 rounded'
                            type='submit'
                        >
                            Submit
                        </button>
                    </form >
                </aside>
            }
        </div>
    )
}