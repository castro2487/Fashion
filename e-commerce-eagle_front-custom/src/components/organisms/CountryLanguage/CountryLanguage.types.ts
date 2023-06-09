import type * as Stitches from '@stitches/react';
import { TabsList } from '@radix-ui/react-tabs';
import { StyledContainer } from './CountryLanguage.styles';

declare module '@amq' {
  type Labels = {
    triggerLabel: string;
    panelTitle: string;
  };

  type CountryLanguageProps = React.ComponentProps<typeof StyledContainer> & {
    currentLanguage: string;
    currentCountry: LocaleCountryProps;
    regAndCountriesList: LocaleRegionProps[];
  };

  interface LocaleCountryProps {
    country: string;
    sfccSiteId: string;
    currencies: Array<string>;
    locales: Array<string>;
  }

  interface LocaleRegionProps {
    regionName: string;
    countries: Array<LocaleCountryProps>;
  }

  interface CountryRegionListProps {
    currentCountry: LocaleCountryProps;
    regAndCountriesList: LocaleRegionProps[];
    variant: Stitches.VariantProps<typeof TabsList>;
    alignment?: Stitches.VariantProps<typeof TabsList>;
  }

  interface CountryLanguagesListProps {
    currentLanguage: string;
    currentCountry: LocaleCountryProps;
  }

  interface OptionalLanguage {
    label: string;
    link: string;
  }

  type OptionalLanguagesListProps = Array<OptionalLanguage | undefined>;
}
