import jwtDecode from 'jwt-decode';

export function isTokenValid(token?: string): boolean {
  if (!token || typeof token !== 'string' || !token.startsWith('Bearer ')) {
    return false;
  }

  const { exp, iat } = jwtDecode<TJWTToken>(token.replace('Bearer ', ''));
  const validTimeSeconds = exp - iat - 60;
  const tokenAgeSeconds = Date.now() / 1000 - iat;
  if (validTimeSeconds >= tokenAgeSeconds) {
    return true;
  }

  return false;
}
