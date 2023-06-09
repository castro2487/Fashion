import { Html, Head, Main, NextScript } from 'next/document';
import { ThirdPartyScripts } from '@atoms/ThirdPartyScripts/ThirdPartyScripts';

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <Main />
        {ThirdPartyScripts('head')}
        <NextScript />
      </body>
    </Html>
  );
}
