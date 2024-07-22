'use server';

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { auth } from '@clerk/nextjs/server';

export async function createTransaction(formData) {
    const { userId } = auth();
    const rawFormData = {
        date: formData.get('date'),
        type: formData.get('type'),
        description: formData.get('description'),
        recurring: formData.get('recurring-monthly'),
        amount: formData.get('amount'),
    }
    console.log('rawFormData', rawFormData);

    /**@todo validate data */

    try {
        if (!rawFormData.amount || !rawFormData.description || !rawFormData.type) throw new Error('All fields required');
        if (!userId) throw new Error('Not logged in');

        let date = new Date(); // default to today
        console.log('rawFormData.date', rawFormData.date);
        if(rawFormData.date) date = new Date(`${rawFormData.date}T00:00:00`);

        let amountInCents = rawFormData.amount * 100;
        if (rawFormData.type == 'withdrawal') amountInCents *= -1;

        const dbUpdate = await sql`INSERT INTO Transaction (Date, Amount, Description, Type, Recurring, UserId) VALUES (${date}, ${amountInCents}, ${rawFormData.description}, ${rawFormData.type}, ${rawFormData.recurring}, ${userId});`;
        console.log('dbUpdate', dbUpdate);
        revalidatePath('/');
        return JSON.stringify(NextResponse.json({ dbUpdate }, { status: 200 }));
    } catch (error) {
        console.log('error', error);
        return JSON.stringify(NextResponse.json({ error }, { status: 500 }));
    }
}

export async function deleteTransaction(id) {
    console.log('id to delete', id);

    try {
        const dbDelete = await sql`DELETE FROM Transaction WHERE id = ${id};`;
        console.log('dbDelete', dbDelete);
        revalidatePath('/');
        return JSON.stringify(NextResponse.json({ dbDelete }, { status: 200 }));
    } catch (error) {
        console.log('error', error);
        return JSON.stringify(NextResponse.json({ error }, { status: 500 }));
    }
}

export async function getTransactions() {
    const { userId } = auth();

    const transactions = await sql`SELECT * FROM Transaction
    WHERE UserId = ${userId};`;
    return JSON.stringify(transactions.rows);
}