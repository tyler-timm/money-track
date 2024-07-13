import TransactionList from "../components/TransactionList";
import Modal from '../components/Modal';

export default async function Home() {

    return (
        <main className='container m-6 flex flex-row flex-wrap gap-5 lg:gap-20'>
            <Modal />
            <TransactionList />
        </main>
    );
}
