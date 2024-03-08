import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const dynamic = "force-dynamic";

export async function GET(request) {
    const transactions = await sql`SELECT * FROM Transaction;`;
    return NextResponse.json({ transactions }, { status: 200 });
}