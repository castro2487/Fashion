import { createContext, useState, useContext, ReactNode } from 'react';
import PropTypes from 'prop-types';

const BasketContext = createContext({});

export type TBasket = {
  items: string[];
  totalPriice: number;
  currency: 'EUR' | 'USD';
};

export type TBasketWrapper = {
  children?: ReactNode;
};

export const BasketWrapper = ({ children }: TBasketWrapper) => {
  const [basket] = useState<TBasket>({
    items: [],
    totalPriice: 0,
    currency: 'EUR',
  });

  const sharedState = {
    basket,
  };

  return (
    <BasketContext.Provider value={sharedState}>
      {children}
    </BasketContext.Provider>
  );
};

export function useBasketContext() {
  return useContext(BasketContext);
}

BasketWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
