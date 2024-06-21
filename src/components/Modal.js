import Button from '../components/Button';
import { useFormState } from 'react-dom';
import { createTransaction } from '@/app/lib/actions';

const initialState = {
    message: 'Initial State'
}

export default function Modal({ isModalVisible, hideOnCancel }) {
    if (!isModalVisible) return null;
    const [state, formAction] = useFormState(createTransaction, initialState);

    return (
        <form action={formAction}>
            <div className='border mb-5 p-3 w-1/3'>
                Add Transaction
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
                <p>State Message: {state?.message}</p>
                <Button
                    className='bg-green-600 hover:bg-green-700 drop-shadow-sm px-2 py-1 mr-4 rounded'
                    text='Submit'
                    type='submit'
                >
                    Submit
                </Button>
                <Button
                    className='bg-blue-600 hover:bg-blue-700 drop-shadow-sm px-2 py-1 rounded'
                    onClick={hideOnCancel}
                    text='Cancel'
                />
            </div>
        </form>
    )
}