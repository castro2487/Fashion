import React, { useEffect, useState } from 'react';

import { Footer } from '@components/organisms/Footer';
import { ExclusiveServices } from '@amq';
import { DefaultFooterProps, Groups } from './';
import { NewsletterContent } from './NewsletterContent';

enum LinkItmeType {
  ServiceLinkItems = 'serviceLinkItems',
  ExclusiveServices = 'exclusiveServices',
}

export const DefaultFooter = (props: DefaultFooterProps) => {
  const {
    copyright,
    newsletterLabel,
    newsletterTitle,
    linkItems,
    newsletterDescription,
    countryLanguageProps,
    theme,
  } = props;

  //Added this block to fix react-hydration-error (see https://nextjs.org/docs/messages/react-hydration-error)
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  if (isFirstRender) {
    return null;
  }

  const groups = linkItems
    ?.filter((link) => link.id === LinkItmeType.ServiceLinkItems)
    .reduce((acc, curr, index) => {
      acc = {
        ...acc,
        [`group${index + 1}`]: {
          id: `${curr.id}-${index + 1}`,
          title: curr.displayName,
          links: curr.linkItem,
        },
      };

      return acc;
    }, {}) as Groups;

  const exclusiveServices = linkItems
    ?.filter((link) => link.id === LinkItmeType.ExclusiveServices)
    .reduce((acc, curr) => {
      acc = {
        title: curr.displayName,
        services: curr.linkItem,
      };

      return acc;
    }, {}) as ExclusiveServices;

  return (
    <Footer
      exclusiveServices={exclusiveServices}
      copyright={copyright}
      group1={groups.group1}
      group2={groups.group2}
      group3={groups.group3}
      newsletterLabel={newsletterLabel}
      newsletterTitle={newsletterTitle}
      newsletterContent={
        <NewsletterContent newsletterDescription={newsletterDescription} />
      }
      countryLanguageProps={countryLanguageProps}
      theme={theme}
    />
  );
};
