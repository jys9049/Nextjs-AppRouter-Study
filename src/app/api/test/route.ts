import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function POST(request: Request, response: Response) {
  const res = await request.json();

  const authorization = request.headers.get('authorization');

  if (!authorization) {
    return NextResponse.json(null, { status: 400, statusText: 'TKN-0001' });
  }

  return NextResponse.json({});
}
