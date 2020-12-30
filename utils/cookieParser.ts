import cookie from 'cookie';

interface CookieRequest {
  headers: {
    cookie: string;
  };
}
export function parseCookies(req: CookieRequest): unknown {
  return cookie.parse(req ? req.headers.cookie || '' : document.cookie);
}
