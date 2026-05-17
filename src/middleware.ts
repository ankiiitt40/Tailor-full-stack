import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // In middleware, we can't easily access Firebase Client Auth or Zustand.
  // We can rely on cookies if we set them during login.
  // For this setup, we'll check a custom cookie 'auth-role' that should be set during login.
  const authRoleCookie = request.cookies.get('auth-role');
  const role = authRoleCookie?.value;
  const isAuthenticated = !!role;

  const path = request.nextUrl.pathname;

  // Protected paths
  const isTailorPath = path.startsWith('/tailor-dashboard');
  const isAdminPath = path.startsWith('/admin');
  const isUserDashboardPath = path.startsWith('/dashboard');

  if (!isAuthenticated && (isTailorPath || isAdminPath || isUserDashboardPath)) {
    // Redirect to respective login pages
    if (isTailorPath) return NextResponse.redirect(new URL('/tailor-login', request.url));
    if (isAdminPath) return NextResponse.redirect(new URL('/admin/login', request.url));
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Role based protection
  if (isAuthenticated) {
    if (isTailorPath && role !== 'tailor' && role !== 'admin') {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    
    if (isUserDashboardPath && role !== 'user' && role !== 'admin') {
      return NextResponse.redirect(new URL('/tailor-dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/tailor-dashboard/:path*', '/dashboard/:path*', '/admin/:path*'],
};
