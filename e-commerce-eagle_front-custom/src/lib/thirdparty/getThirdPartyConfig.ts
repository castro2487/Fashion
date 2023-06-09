import { cookieBannerProps, gtmProps } from './index';

const thirdParties = [cookieBannerProps, gtmProps] as ThirdPartyScript[];

export const getThirdPartyConfig = (
  position: ThirdPartyPostion
): ThirdPartyScript[] => {
  if (position === 'all') {
    return thirdParties;
  }
  return thirdParties.filter((thirdParty) => thirdParty.position === position);
};
