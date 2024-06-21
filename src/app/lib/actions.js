'use server';

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { unstable_noStore } from 'next/cache';
import { revalidatePath } from 'next/cache'

export async function createTransaction(prevState, formData) {
    console.log('prevState', prevState);
    const rawFormData = {
        amount: formData.get('amount'),
        description: formData.get('description'),
        type: formData.get('type')
    }
    console.log('rawFormData', rawFormData);

    /**@todo validate data */

    try {
        if (!rawFormData.amount || !rawFormData.description || !rawFormData.type) throw new Error('All fields required');

        let amountInCents = rawFormData.amount * 100;
        if (rawFormData.type == 'withdrawal') amountInCents *= -1;

        const dbUpdate = await sql`INSERT INTO Transaction (Amount, Description, Type) VALUES (${amountInCents}, ${rawFormData.description}, ${rawFormData.type});`;
        console.log('dbUpdate', dbUpdate);
    } catch (error) {
        console.log('error', error);
        return JSON.stringify(NextResponse.json({ error }, { status: 500 }));
    }

    const transactions = await sql`SELECT * FROM Transaction;`;
    console.log('transactions', transactions.rows);
    revalidatePath('/page');
    return JSON.stringify(NextResponse.json({ transactions }, { status: 200 }));
}

export async function deleteTransaction(id) {
    console.log('id to delete', id);

    try {
        const dbDelete = await sql`DELETE FROM Transaction WHERE id = ${id};`;
        console.log('dbUpdate', dbDelete);
    } catch (error) {
        console.log('error', error);
        return JSON.stringify(NextResponse.json({ error }, { status: 500 }));
    }

    return JSON.stringify(NextResponse.json({ id }, { status: 200 }));
}

export async function getTransactions() {
    unstable_noStore()
    const transactions = await sql`SELECT * FROM Transaction;`;
    return JSON.stringify(transactions.rows);
}