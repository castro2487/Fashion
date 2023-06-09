import { Document } from '@contentful/rich-text-types';
import { Group, CountryLanguageProps, ILinkProps } from '@amq';
import { COLOR_OPTION } from '@constants/uiOptionsAndDefinition';

interface LnkItemBlock {
  displayName: string;
  id: string;
  linkItem: ILinkProps[];
}

export interface CtfFooterData {
  copyright: string;
  newsletterLabel: string;
  newsletterTitle: string;
  newsletterDescription: Document;
  linkItems: LnkItemBlock[];
}

export type DefaultFooterProps = {
  countryLanguageProps: CountryLanguageProps;
  theme?: COLOR_OPTION;
} & CtfFooterData;

export interface Groups {
  group1: Group;
  group2: Group;
  group3: Group;
}
