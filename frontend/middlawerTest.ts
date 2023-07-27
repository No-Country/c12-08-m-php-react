import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { verifyToken } from './services/auth/verify-token';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPathPublic = path === '/login' || path === '/register';
  const token = request.cookies.get('jwt_token')?.value || '';
  const { isAuth } = await verifyToken(token);

  if (isPathPublic && token) {
    if (isAuth) {
      return NextResponse.redirect(new URL('/home', request.url));
    } else {
      const response = NextResponse.next();
      response.cookies.set('jwt_token', '', { expires: new Date() });
      return response;
    }
  }

  if (!isPathPublic && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isPathPublic && !token) {
    return NextResponse.next();
  }

  if (!isPathPublic && token) {
    if (isAuth) {
      return NextResponse.next();
    } else {
      const response = NextResponse.redirect(new URL('/login', request.url));
      // response.cookies.set('jwt_token', '', { expires: new Date() });
      return response;
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/home/:path*', '/home', '/login', '/register'],
};
