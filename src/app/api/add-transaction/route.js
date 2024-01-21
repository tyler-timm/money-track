import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const amount = searchParams.get('amount');
    const description = searchParams.get('description');
    const type = searchParams.get('type');

    try {
        if (!amount || !description || !type) throw new Error('All fields required');
        await sql`INSERT INTO Transactions (Amount, Description, Type) VALUES (${amount}, ${description}, ${type});`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    const transactions = await sql`SELECT * FROM Transactions;`;
    return NextResponse.json({ transactions }, { status: 200 });
}