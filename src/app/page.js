import TransactionList from "../components/TransactionList";
import Modal from '../components/Modal';

export default async function Home() {

    return (
        <main className='m-5 flex gap-10'>
            <TransactionList />
            <Modal />
        </main>
    );
}
