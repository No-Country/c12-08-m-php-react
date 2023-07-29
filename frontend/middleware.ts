import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPathPublic = path === '/login' || path === '/register';
  const token = request.cookies.get('jwt_token')?.value || '';

  if (isPathPublic && token) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  if (!isPathPublic && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  NextResponse.next();
}

export const config = {
  matcher: ['/home/:path*', '/home', '/login', '/register'],
};
