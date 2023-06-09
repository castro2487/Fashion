import { ComponentProps } from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { StichesCSS } from '@amq';

type ToastPrimitiveProps = ComponentProps<typeof ToastPrimitive.Root>;
type ToastProviderPrimitiveProps = ComponentProps<
  typeof ToastPrimitive.Provider
>;

export interface ToastProps extends ToastPrimitiveProps {
  title: string;
  isSuccess: boolean;
  centered?: boolean;
  css?: StichesCSS;
}

export interface ToastProviderProps extends ToastProviderPrimitiveProps {
  children: JSX.Element;
}
