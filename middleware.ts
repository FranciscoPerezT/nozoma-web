import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  if (host.endsWith('.vercel.app')) {
    const url = request.nextUrl.pathname + request.nextUrl.search
    return NextResponse.redirect('https://www.nozoma.cl' + url)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
