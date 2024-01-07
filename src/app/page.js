'use client';

import { useState } from "react";
import Header from "../components/Header";
import TransactionList from "../components/TransactionList";
import Button from '../components/Button';

export default function Home() {
    const [transactions, setTransactions] = useState([
        {
            id: 1,
            amount: 5000,
            text: "Deposit",
            category: "Paycheck",
        },
        {
            id: 2,
            amount: -50,
            text: "Withdrawal",
            category: "Gas",
        },
        {
            id: 3,
            amount: -5,
            text: "Withdrawal",
            category: "Hot dogs",
        }
    ]);

    const onClick = () => {
        console.log('button was clicked!')
    }

    const deleteTransaction = (id) => {
        console.log('delete', id)
        setTransactions(transactions.filter(transaction => transaction.id !== id));
    }

    return (
        <main className='m-5'>
            <Header title="Budget Tracker" />
            <Button
                className='p-2 mr-5 mb-2 bg-green-700'
                text='Add Money'
                onClick={onClick}
            />
            <Button
                className='p-2 bg-red-700'
                text="Remove Money"
                onClick={onClick}
            />
            <TransactionList transactions={transactions} onDelete={deleteTransaction} />
        </main>
    );
}
