import Button from '../components/Button';
import { createTransaction } from '@/app/lib/actions';

export default function Modal({ isModalVisible, hideOnCancel }) {
    if (!isModalVisible) return null;
    return (
        <form action={createTransaction}>
            <div className='border mb-5 p-3 w-1/3'>
                Add Transaction
                <br />
                <label>
                    Amount:
                    <input
                        id='amount'
                        name='amount'
                        type='text'
                        className='border m-2 p-1 text-black'
                    />
                </label>
                <br />
                <label>
                    Description:
                    <input
                        id='description'
                        name='description'
                        type='text'
                        className='border m-2 p-1 text-black'
                    />
                </label>
                <br />
                <label>
                    Type:
                    <input
                        id='type'
                        name='type'
                        type='text'
                        className='border m-2 p-1 text-black'
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
                    onClick={hideOnCancel}
                    text='Cancel'
                />
            </div>
        </form>
    )
}

/* 
Good to know: In HTML, you'd pass a URL to the action attribute. This URL would be the destination where your form data should be submitted (usually an API endpoint).
However, in React, the action attribute is considered a special prop - meaning React builds on top of it to allow actions to be invoked.
Behind the scenes, Server Actions create a POST API endpoint. This is why you don't need to create API endpoints manually when using Server Actions.
 */