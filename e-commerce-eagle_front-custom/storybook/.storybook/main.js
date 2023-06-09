const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  staticDirs: ['../../public'],
  framework: '@storybook/react',
  typescript: {
    reactDocgen: false,
  },
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.plugins.push(new NodePolyfillPlugin());
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });
    // This storybook's components are not rendered in the context of the NextJs, we need mock all hooks
    config.resolve.alias['next/router'] = require.resolve(
      './__mocks__/routerMock.js'
    );

    return config;
  },
};
