import { NextResponse } from 'next/server';

export async function POST(request: Request, response: Response) {
  return NextResponse.json({ accessToken: 'asf8sefu3yhfu12f' });
}
