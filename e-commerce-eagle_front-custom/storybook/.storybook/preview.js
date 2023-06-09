import { injectGlobalStyles } from '../../src/styles/globalStyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const decorators = [
  (Story) => {
    injectGlobalStyles();
    return <Story />;
  },
];
