import TransactionList from "../components/TransactionList";
import AddTransaction from '../components/AddTransaction';

export default async function Home() {

    return (
        <main className='ml-10'>
            <AddTransaction />
            <TransactionList />
        </main>
    );
}
