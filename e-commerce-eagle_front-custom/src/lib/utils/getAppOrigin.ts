export const getAppOrigin = (): TString => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }

  const { APP_ORIGIN } = process.env;

  if (!APP_ORIGIN) {
    throw new Error('Application is not initialized.');
  }

  return APP_ORIGIN || '';
};
