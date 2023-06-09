import { getThirdPartyConfig } from '@lib/thirdparty/getThirdPartyConfig';
import Script from 'next/script';

export const ThirdPartyScripts = (position: ThirdPartyPostion = 'all') => {
  const thirdPartyProps = getThirdPartyConfig(position);

  const Scripts = thirdPartyProps.map(
    ({ position: _, ...scriptProps }: ThirdPartyScript) => {
      return <Script {...scriptProps} key={scriptProps.src} />;
    }
  );

  return Scripts;
};
