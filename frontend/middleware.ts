import { NextRequest, NextResponse } from 'next/server';

// This function must be implemented on a backend endpoint
async function validateToken(token: string | undefined): Promise<string> {
  // function sleep(ms: number) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }
  // await sleep(2000);
  const res = JSON.stringify({ isAuth: true });
  return res;
}

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if (!request.cookies.has('jwt_token') && !request.cookies.has('google_token')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // TODO: handle the case where the Promise is rejected
  if(request.cookies.has('jwt_token')) {
    const { isAuth } = JSON.parse(await validateToken('asñkdjbasd'));
    if (!isAuth) return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/home/:path*', '/home'],
};
