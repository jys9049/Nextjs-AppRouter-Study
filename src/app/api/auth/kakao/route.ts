import { NextResponse } from 'next/server';

export async function GET(request: Request, response: Response) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('code');
  return NextResponse.json({
    accessToken: '5a21dassd214124aesfasef3a',
    refreshToken: '18y8asfhse8fy4782f2u3',
  });
}
