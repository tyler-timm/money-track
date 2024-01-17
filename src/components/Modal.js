import Button from '../components/Button';

export default function Modal({ isModalVisible, hideOnCancel }) {
    if (!isModalVisible) return null;
    return (
        <div className='border mb-5'>
            Add Transaction
            <br />
            <label for='amount'>Amount:</label>
            <input id='amount' className='border m-2'></input>
            <br />
            <label for='type'>Type:</label>
            <input id='type' className='border m-2'></input>
            <br />
            <label for='category'>Category: </label>
            <input id='category' className='border m-2'></input>
            <br />
            <Button
                className='bg-blue-500 hover:bg-blue-600 drop-shadow-sm px-2 py-1 rounded'
                onClick={hideOnCancel}
                text='Cancel'
            />
        </div>
    )
}