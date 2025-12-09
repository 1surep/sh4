import { NextResponse } from 'next/server';

export function proxy(request) {
  // Get the pathname from the request
  const path = request.nextUrl.pathname;

  // Define protected routes
  const isProtectedRoute = path.startsWith('/dashboard');

  // Check if user is authenticated by looking for token in cookies or headers
  const token = request.cookies.get('token')?.value || request.headers.get('authorization')?.replace('Bearer ', '');

  // If trying to access protected route without token, redirect to signin
  if (isProtectedRoute && !token) {
    const url = new URL('/signin', request.url);
    url.searchParams.set('redirect', path); // Add redirect parameter to return after login
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: ['/dashboard/:path*']
};
