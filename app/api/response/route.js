import { NextResponse } from 'next/server';

export async function GET(request) {
    return NextResponse.json({ message: '¡Transacción exitosa!' }, { status: 200 });
}