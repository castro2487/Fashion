declare module '@amq' {
  interface NavLink extends TContentfulLinkProps {
    image?: BynderImageProps;
    lightLogo?: boolean;
  }

  interface Level {
    name: string;
    id: string;
    image?: BynderImageProps;
    lightLogo?: boolean;
  }

  interface Level3 extends NavLink {
    linkDisplayCategory?: string;
  }

  interface Level2 extends Level {
    editTitle?: string;
    editLinks?: Level3[];
    subcategories?: Level3[];
  }

  interface Level1 extends Level {
    subcategories: Level2[] | Level3[];
    listType: string;
  }

  interface NavigationContent {
    countryLanguageProps: CountryLanguageProps;
    links: ILinkProps[];
    categories: Level1[];
  }

  interface NavigationProps extends NavigationContent {
    open: boolean;
    handleNavigationChange: (open: boolean) => void;
  }
}

export const module_isolation = true;
