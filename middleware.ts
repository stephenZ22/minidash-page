import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  // 从 Cookie 里取 token
  const token = req.cookies.get('jwt_token')?.value

  // 当前请求路径
  const { pathname } = req.nextUrl

    // ✅ 忽略 next 静态资源和 API 路径
  if (
    pathname.startsWith('/_next') || // 内置静态资源
    pathname.startsWith('/api') ||   // 接口
    pathname.startsWith('/favicon.ico') || // 网站图标
    pathname.startsWith('/assets')   // 如果你有自定义静态资源
  ) {
    return NextResponse.next()
  }

  // 如果访问的是 `/login` 或 `/` 就放行（不需要 token）
  if (pathname === '/login' || pathname === '/') {
    console.log("don't need auth")
    return NextResponse.next()
  }

  // 没有 token 的情况 → 跳转到 login
  if (!token) {
    const loginUrl = new URL('/login', req.url)
    return NextResponse.redirect(loginUrl)
  }

  // 有 token → 放行
  return NextResponse.next()
}