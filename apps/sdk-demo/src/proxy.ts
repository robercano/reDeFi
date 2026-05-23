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

  // 2. Bypass authentication for MetaMask Mobile's embedded browser
  // (Basic Auth popups often break or fail to render in embedded Web3 wallet browsers)
  const userAgent = req.headers.get('user-agent') || ''
  if (userAgent.toLowerCase().includes('metamask') || userAgent.toLowerCase().includes('wallet')) {
    return NextResponse.next()
  }

  // 3. Require Basic Auth for all other normal visitors
  const basicAuth = req.headers.get('authorization')
  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    // Read credentials from environment variables (fallback to default for demo)
    const expectedUser = process.env.DEMO_USER || 'admin'
    const expectedPassword = process.env.DEMO_PASSWORD || 'redefi2026'

    if (user === expectedUser && pwd === expectedPassword) {
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
