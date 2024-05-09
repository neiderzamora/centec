import { NextResponse } from 'next/server';

export async function GET(request) {
    return NextResponse.json({ message: '¡Confirmación exitosa!' }, { status: 200 });
}