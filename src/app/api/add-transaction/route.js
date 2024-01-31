import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const amount = searchParams.get('amount');
    const description = searchParams.get('description');
    const type = searchParams.get('type');

    try {
        if (!amount || !description || !type) throw new Error('All fields required');
        // const amountCents = (amount.includes('.') ? amount * 100 : amount);
        const newTransaction = await prisma.transaction.create({
            data: {
                amount: amount,
                description: description,
                type: type
            }
        });

        // await sql`INSERT INTO Transactions (Amount, Description, Type) VALUES (${amount}, ${description}, ${type});`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    // Return transactions in database
    const transactions = await prisma.transaction.findMany();
    // const transactions = await sql`SELECT * FROM Transactions;`;
    return NextResponse.json({ transactions }, { status: 200 });
}