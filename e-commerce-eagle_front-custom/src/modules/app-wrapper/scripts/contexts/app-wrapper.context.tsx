import { createContext, useState, useContext, ReactNode } from 'react';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';

const AppContext = createContext({});

export type TAppWrapper = {
  children?: ReactNode;
};

export const AppWrapper = ({ children }: TAppWrapper) => {
  const [cookies] = useCookies(['preferred-locale']);
  const [site, setSite] = useState('');
  const [locale, setLocale] = useState(
    cookies ? cookies['preferred-locale'] : ''
  );
  const sharedState = {
    site,
    setSite,
    locale,
    setLocale,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
