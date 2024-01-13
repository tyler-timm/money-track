'use client';

import { useState } from "react";
import Header from "../components/Header";
import TransactionList from "../components/TransactionList";
import Button from '../components/Button';
import Modal from '../components/Modal';

export default function Home() {
    const [transactions, setTransactions] = useState([
        {
            id: 1,
            amount: 5000,
            type: "Deposit",
            category: "Paycheck"
        },
        {
            id: 2,
            amount: -50,
            type: "Withdrawal",
            category: "Gas"
        },
        {
            id: 3,
            amount: -5,
            type: "Withdrawal",
            category: "Hot dogs"
        }
    ]);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const addTransactionOnClick = () => {
        console.log('button was clicked!');
        setIsModalVisible(true);
    }

    const deleteTransaction = (id) => {
        console.log('delete', id)
        setTransactions(transactions.filter(transaction => transaction.id !== id));
    }

    return (
        <main className='m-5'>
            <Header />
            <Button
                className='p-2 mb-5 bg-green-700'
                text='Add Transaction'
                onClick={addTransactionOnClick}
            />
            <br />
            <Modal isModalVisible={isModalVisible} />
            {/* <Button
                className='p-2 bg-red-700'
                text="Remove Money"
                onClick={onClick}
            /> */}
            <TransactionList transactions={transactions} onDelete={deleteTransaction} />
        </main>
    );
}
