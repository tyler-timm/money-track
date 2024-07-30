import TransactionList from "../components/TransactionList";
import AddTransaction from '../components/AddTransaction';
import RecurringTransactionList from "../components/RecurringTransactionList";

export default async function Home() {

    return (
        <main className='ml-10'>
            <AddTransaction />
            <RecurringTransactionList />
            <TransactionList />
        </main>
    );
}
