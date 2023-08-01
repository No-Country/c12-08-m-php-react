import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import verifyToken from '@/services/auth/verify-token';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPathPublic = path === '/login' || path === '/register';
  const token = request.cookies.get('jwt_token')?.value || '';
  const isAuth = await verifyToken(token);

  if (isPathPublic && isAuth) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  if (!isPathPublic && !isAuth) {
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.set({ name: 'jwt_token', value: '', path: '/', expires: 0 });
    return response;
  }

  if (!isAuth) {
    const response = NextResponse.next();
    response.cookies.set({ name: 'jwt_token', value: '', path: '/', expires: 0 });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/home/:path*', '/home', '/login', '/register'],
};
