/** @type {import('next').NextConfig} */

// Loads and transpile TS files to commonjs
function requireTypescript(path) {
  const fileContent = require('fs').readFileSync(path, 'utf8');
  const compiled = require('@babel/core').transform(fileContent, {
    filename: path,
    presets: ['@babel/preset-env', '@babel/preset-typescript'],
  });
  const Module = module.constructor;
  const m = new Module();
  m._compile(compiled.code, path);
  return m.exports;
}

const { parseJSON } = requireTypescript('./helpers/index.ts');
const constants = requireTypescript('./constants/index.ts');
const localesConfig = ["de-at","de-ch","de-de","de-lu","en-ae","en-at","en-au","en-be","en-bg","en-ca","en-ch","en-cy","en-cz","en-de","en-dk","en-es","en-fi","en-fr","en-gb","en-gr","en-hk","en-hr","en-hu","en-ie","en-il","en-it","en-jp","en-kr","en-lt","en-lu","en-lv","en-mc","en-mo","en-mx","en-my","en-nl","en-no","en-pl","en-pt","en-ro","en-sa","en-se","en-sg","en-si","en-sk","en-th","en-tw","en-us","fr-at","fr-be","fr-ca","fr-ch","fr-de","fr-fr","fr-it","fr-mc","fr-sa","it-it","ja-jp","ko-kr","zh-ae","zh-at","zh-au","zh-be","zh-bg","zh-ca","zh-ch","zh-cy","zh-cz","zh-dk","zh-es","zh-fi","zh-fr","zh-gb","zh-gr","zh-hk","zh-hr","zh-hu","zh-ie","zh-il","zh-it","zh-jp","zh-kr","zh-lt","zh-lu","zh-lv","zh-mc","zh-mo","zh-my","zh-nl","zh-no","zh-pl","zh-pt","zh-ro","zh-sa","zh-se","zh-sg","zh-si","zh-sk","zh-th","zh-tw","zh-us"];

// Default local value e.g. 'en-fr'
const CONFIG_DEFAULT_LOCALE = process.env.CONFIG_DEFAULT_LOCALE || 'en-fr';

// List of all locales'
const CONFIG_LOCALES_LIST = process.env.CONFIG_LOCALES_LIST
  ? parseJSON(
      process.env.CONFIG_LOCALES_LIST,
      constants.LOCALES_JSON_PARSE_ERROR
    )
  : localesConfig;

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  i18n: {
    localeDetection: false,
    locales: CONFIG_LOCALES_LIST,
    defaultLocale: CONFIG_DEFAULT_LOCALE,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'amq-sandbox.getbynder.com',
      },
    ],
  },
};

module.exports = nextConfig;
