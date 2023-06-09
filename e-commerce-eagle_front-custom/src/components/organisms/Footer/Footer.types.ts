import { ReactNode } from 'react';
import { COLOR_OPTION } from '@constants/uiOptionsAndDefinition';

declare module '@amq' {
  interface ExclusiveServices {
    title: string;
    services: ExclusiveService[];
  }

  interface ExclusiveService extends ILinkProps {
    id: string;
    image: string;
  }

  interface Group {
    title: string;
    links: ILinkProps[];
    id: string;
  }

  interface FooterContent {
    group1: Group;
    group2: Group;
    group3: Group;
    copyright: string;
    copyrightLong?: string;
    newsletterLabel: string;
    newsletterTitle: string;
    newsletterContent: ReactNode;
    countryLanguageProps: CountryLanguageProps;
    theme?: COLOR_OPTION;
  }

  interface FooterProps extends FooterContent {
    exclusiveServices?: ExclusiveServices;
  }
}

export const module_isolation = true;
