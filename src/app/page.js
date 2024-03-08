'use client';

import { useState, useEffect } from "react";
import Header from "../components/Header";
import TransactionList from "../components/TransactionList";
import Button from '../components/Button';
import Modal from '../components/Modal';
import { deleteTransaction } from "./lib/actions";

export default function Home() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch('./api/get-transactions', { cache: 'no-store' })
            .then(res => res.json())
            .then(data => {
                console.log('data', data.transactions.rows);
                setTransactions(data.transactions.rows);
            })
    }, []);


    const [isModalVisible, setIsModalVisible] = useState(false);

    const addTransactionOnClick = () => {
        setIsModalVisible(true);
    }

    const removeTransaction = (id) => {
        console.log('delete', id);
        setTransactions(transactions.filter(transaction => transaction.id !== id));
        const deleteResponse = deleteTransaction(id);
        console.log('deleteResponse', deleteResponse);
    }

    const hideOnCancel = (event) => {
        setIsModalVisible(false);

        event.preventDefault();
    }


    return (
        <main className='m-5'>
            <Header />
            <Button
                className='p-2 mb-5 bg-green-700 drop-shadow-sm px-2 py-1 rounded'
                text='Add Transaction'
                onClick={addTransactionOnClick}
            />
            <br />
            <Modal isModalVisible={isModalVisible} hideOnCancel={hideOnCancel} />
            <TransactionList transactions={transactions} onDelete={removeTransaction} />
        </main>
    );
}
