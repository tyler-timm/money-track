import TransactionList from "../components/TransactionList";
import AddTransaction from '../components/AddTransaction';

export default async function Home() {

    return (
        <main className='container m-6 flex flex-row justify-center flex-wrap gap-5 lg:gap-20'>
            <AddTransaction />
            <TransactionList />
        </main>
    );
}
