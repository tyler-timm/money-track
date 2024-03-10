'use client';

import { useState, useEffect } from "react";
import Header from "../components/Header";
import TransactionList from "../components/TransactionList";
import Button from '../components/Button';
import Modal from '../components/Modal';
import { deleteTransaction, getTransactions } from "./lib/actions";

export default function Home() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        getTransactions()
            .then(res => JSON.parse(res))
            .then(transactionData => {
                setTransactions(transactionData);
            });
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
            <TransactionList transactions={transactions} onDelete={removeTransaction} />
            <br />
            <Button
                className='p-2 mb-5 bg-green-700 hover:bg-green-800 drop-shadow-sm px-2 py-1 rounded'
                text='Add Transaction'
                onClick={addTransactionOnClick}
            />
            <br />
            <Modal isModalVisible={isModalVisible} hideOnCancel={hideOnCancel} />
        </main>
    );
}
