import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(req: NextRequest) {
  // 1. Bypass authentication for API routes and static Next.js files
  if (
    req.nextUrl.pathname.startsWith('/api') ||
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname === '/favicon.ico'
  ) {
    return NextResponse.next()
  }

  // 2. Require Basic Auth for all other normal visitors
  const basicAuth = req.headers.get('authorization')
  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    // Read credentials from environment variables. DEMO_PASSWORD has no
    // hardcoded default: if it is unset/empty, auth must fail closed.
    const expectedUser = process.env.DEMO_USER || 'admin'
    const expectedPassword = process.env.DEMO_PASSWORD

    if (expectedPassword && user === expectedUser && pwd === expectedPassword) {
      return NextResponse.next()
    }
  }

  // If auth fails or is missing, prompt for Basic Auth
  return new NextResponse('Authentication Required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}

// Apply middleware to all routes except API and static files
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
