module.exports = {
  'src/**/*.{ts,tsx}': (filenames) => [
    'npm run format:fix',
    'npm run lint:fix',
    'npm run test',
    'npm run format:check',
    'npm run lint',
  ],
  '*.js': (filenames) => [
    'npm run format:fix',
    'npm run lint:fix',
    'npm run format:check',
    'npm run lint',
  ],
};
