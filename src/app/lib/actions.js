'use server';

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function createTransaction(formData) {
    const rawFormData = {
        amount: formData.get('amount'),
        type: formData.get('type'),
        description: formData.get('description')
    }
    console.log(`rawFormData: ${JSON.stringify(rawFormData)}`);

    /**@todo validate data */

    try {
        if (!amount || !description || !type) throw new Error('All fields required');
        await sql`INSERT INTO Transactions (Amount, Description, Type) VALUES (${rawFormData.amount}, ${rawFormData.description}, ${rawFormData.type});`;
    } catch (error) {
        return JSON.stringify(NextResponse.json({ error }, { status: 500 }));
    }

    const transactions = await sql`SELECT * FROM Transactions;`;
    console.log('transactions', transactions);
    return JSON.stringify(NextResponse.json({ transactions }, { status: 200 }));
}