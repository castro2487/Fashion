import { createContext, useState, useContext, ReactNode } from 'react';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';

export type TCustomer = {
  cid?: string;
  usid?: string;
  enc_user_id?: string;
};

export type TCustomerContext = {
  customer: TCustomer;
};

export type TCustomerWrapper = {
  children?: ReactNode;
};

const CustomerContext = createContext<TCustomerContext>({} as TCustomerContext);

export const CustomerWrapper = ({ children }: TCustomerWrapper) => {
  const [cookies] = useCookies(['cid', 'usid', 'enc_user_id']);
  const [customer] = useState<TCustomer>({
    cid: cookies?.cid,
    usid: cookies?.usid,
    enc_user_id: cookies?.enc_user_id,
  });
  const sharedState = {
    customer,
  };

  return (
    <CustomerContext.Provider value={sharedState}>
      {children}
    </CustomerContext.Provider>
  );
};

export function useCustomerContext(): TCustomerContext {
  return useContext<TCustomerContext>(CustomerContext);
}

CustomerWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
