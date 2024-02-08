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
        // if (!amount || !description || !type) throw new Error('All fields required');
        const dbUpdate = await sql`INSERT INTO Transaction (Amount, Description, Type) VALUES (${rawFormData.amount}, ${rawFormData.description}, ${rawFormData.type});`;
        console.log('dbUpdate', dbUpdate);
    } catch (error) {
        console.log(JSON.stringify(NextResponse.json({ error }, { status: 500 })))
        return JSON.stringify(NextResponse.json({ error }, { status: 500 }));
    }

    const transactions = await sql`SELECT * FROM Transaction;`;
    console.log('transactions', transactions);
    return JSON.stringify(NextResponse.json({ transactions }, { status: 200 }));
}