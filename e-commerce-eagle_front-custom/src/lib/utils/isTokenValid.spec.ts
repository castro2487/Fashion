import { isTokenValid } from './isTokenValid';

describe('isTokenValid', () => {
  it('returns false when token is undefined', () => {
    expect(isTokenValid(undefined)).toBe(false);
  });

  it('returns false when token is null', () => {
    expect(isTokenValid(null)).toBe(false);
  });

  it('returns false when token is not a string', () => {
    expect(isTokenValid(123)).toBe(false);
  });

  it('returns false when token is an invalid JWT token', () => {
    const invalidToken = 'not_a_valid_token';
    expect(isTokenValid(invalidToken)).toBe(false);
  });

  it('returns false when token is already expired', () => {
    const expiredToken =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE1NjEyMzkwMjJ9.GFX78_y7AVwR_FzMSoWLGZ8lzvLpN3AC_9DlN2LPy8k';
    expect(isTokenValid(expiredToken)).toBe(false);
  });
});
