declare module '@amq' {
  interface HeaderBarProps {
    account?: JSX.Element;
    type?: 'transparent' | 'light' | 'dark';
    hidden?: boolean;
    navigation: NavigationProps;
    search?: JSX.Element;
    cart?: JSX.Element;
    isNavigationOpen: boolean;
    setIsNavigationOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }

  interface HeaderProps {
    navigation: NavigationProps;
  }
}

export const module_isolation = true;
